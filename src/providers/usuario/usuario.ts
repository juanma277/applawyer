import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChild } from '@angular/core';
import { AlertController, Platform, LoadingController, NavController, ToastController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';

//URL DEL SERVICIO
import { URL_SERVICIOS_PRODUCCION } from '../../config/url.servicios';

//SERVICIO PUSH NOTIFICACIONES - ONESIGNAL
import { PushnotificationProvider } from '../../providers/pushnotification/pushnotification';

//SERVICIO DE PROCESOS
import { CrudProcesosProvider } from '../../providers/crud-procesos/crud-procesos';

//PAGINAS
import { HomePage } from '../../pages/home/home';


@Injectable()
export class UsuarioProvider {

  @ViewChild('NavCtrl') nav:NavController;

	token:string;
	id_usuario:string;
  rol:string;
  activo:string;
  name:string;
  player_id:string;
  userImage:string;
  homePage = HomePage;
  paquete_id:string;
  created_at:string;
  fechaini: string;
  fechafin: string;


  constructor(	public http: HttpClient,
        				private alertCtrl:AlertController,
        				private platform:Platform,
        				private storage:Storage,
                public loadingCtrl: LoadingController,
                private _pnp:PushnotificationProvider,
                private _cpp:CrudProcesosProvider,
                public toastCtrl: ToastController) {

    this.cargarStorage();
    this._pnp.obtenerPlayerID();
  }


  ingresar (identificacion:string, contrasena:string){

      let loader = this.loadingCtrl.create({
          content: "Cargando ...",
        });
        loader.present();

  		let datos ={'ident':identificacion, 'contrasena':contrasena};
      
      var url = URL_SERVICIOS_PRODUCCION+'loginAPI';

  		return new Promise(resolve=>{
  			this.http.post(url,datos)
  				.subscribe(resp=>{

  					let data_resp = resp;

  					if(data_resp['error']){
              loader.dismiss();
  						this.alertCtrl.create({
  							title:'Error!',
  							subTitle:data_resp['Mensaje'],
  							buttons:["Aceptar"]
  						}).present();
  					}else{

              
              this.token = data_resp['token'];
              this.id_usuario = data_resp['id_usuario'];
              this.rol = data_resp['rol'];
              this.activo = "1";
              this.name = data_resp['name'];
              this.userImage = data_resp['image'];
              this.player_id = this._pnp.player_id;
              this.paquete_id = data_resp['paquete_id'];
              this.created_at = data_resp['created_at'];

              let ini = this.created_at;
              let fin = moment(this.fechafin);
              let diff = fin.diff(ini, 'days');
              console.log(diff);

              //GUARDAR EN EL STORAGE
              this.guardarStorage();
              this.registrarPlayerID(this.player_id, this.id_usuario);
              this._cpp.obtenerProcesos(parseInt(this.id_usuario));
              this._cpp.obtenerNotificaciones(parseInt(this.id_usuario));              
              loader.dismiss();
              resolve();
  					}
  					
  				});
  		})

  		
  }

  registrarPlayerID(player_id:string, id_usuario:string){

    //SE REALIZA UN UPDATE A LA BASE DE DATOS -> TABLA USER -> CAMPO PLAYER_ID

              if(this.platform.is("cordova")){

                    let url = URL_SERVICIOS_PRODUCCION + "usuario/playerID/"+ player_id +"/"+id_usuario;
                          this.http.get(url)
                                    .subscribe(data=>{

                                      if (data['error']) {
                                        // ERROR
                                        this.alertCtrl.create({
                                          title:'Error!',
                                          subTitle:data['Mensaje'],
                                          buttons:["Aceptar"]
                                        }).present();
                                      }else{
                                        //EVENTO
                                       let toast = this.toastCtrl.create({
                                          message: 'Movil registrado correctamente.',
                                          duration: 3000
                                        });
                                        toast.present();
                                      }

                              });

                }else{

                  let url = URL_SERVICIOS_PRODUCCION + "usuario/playerID/DESDE-WEB-123456/"+id_usuario;
                          this.http.get(url)
                                    .subscribe(data=>{

                                      if (data['error']) {
                                        // ERROR
                                        this.alertCtrl.create({
                                          title:'Error!',
                                          subTitle:data['Mensaje'],
                                          buttons:["Aceptar"]
                                        }).present();
                                      }else{
                                        //EVENTO
                                        let toast = this.toastCtrl.create({
                                          message: 'Movil registrado correctamente.',
                                          duration: 3000
                                        });
                                        toast.present();
                                      }

                              });

                }

  }

  cerrarSession(){

      let promesa = new Promise ((resolve, reject)=>{

          //SE ACTUALIZA EN LA TABLA USER EL CAMPO ID_PLAYER

         let url = URL_SERVICIOS_PRODUCCION + "usuario/playerID/CERRANDO-SESSION-123456/"+this.id_usuario;
                          this.http.get(url)
                                    .subscribe(data=>{

                                      if (data['error']) {
                                        // ERROR
                                        this.alertCtrl.create({
                                          title:'Error!',
                                          subTitle:data['Mensaje'],
                                          buttons:["Aceptar"]
                                        }).present();
                                      }else{
                                        //EVENTO
                                        this.alertCtrl.create({
                                          title:'Correcto',
                                          subTitle:'Sessión cerrada exitosamente. Vuelve pronto.',
                                          buttons:["Aceptar"]
                                        }).present();

                                        this.limpiarDatos();

                                        //GUARDAR STORAGE
                                        this.guardarStorage();
                                        resolve();

                                      }

                              });


                     });

          return promesa;	

  		}

  private guardarStorage(){


    if(this.platform.is("cordova")){
      //DISPOSITIVO
      this.storage.set('token',this.token);
      this.storage.set('id_usuario',this.id_usuario);
      this.storage.set('rol', this.rol);
      this.storage.set('activo', this.activo);
      this.storage.set('name', this.name);
      this.storage.set('playerID', this.player_id);
      this.storage.set('userImage', this.userImage);
      this.storage.set('paquete_id', this.paquete_id);
      this.storage.set('created_at', this.created_at);

    }else{
      //ESCRITORIO
      if(this.token){
	      localStorage.setItem("token", this.token);
	      localStorage.setItem("id_usuario", this.id_usuario);
        localStorage.setItem("rol",this.rol);
        localStorage.setItem("activo",this.activo);
        localStorage.setItem("name",this.name);
        localStorage.setItem('playerID', this.player_id);
        localStorage.setItem('userImage', this.userImage);
        localStorage.setItem('paquete_id', this.paquete_id);
        localStorage.setItem('created_at', this.created_at);

      }else{
      	localStorage.removeItem("token");
      	localStorage.removeItem("id_usuario");
        localStorage.removeItem("rol");
        localStorage.removeItem("activo");
        localStorage.removeItem("name");
        localStorage.removeItem("playerID");
        localStorage.removeItem("userImage");
        localStorage.removeItem("paquete_id");
        localStorage.removeItem("created_at");

      }
      
    }

  }

  cargarStorage(){

    let promesa = new Promise ((resolve, reject)=>{

      if(this.platform.is("cordova")){
          //DISPOSITIVO

          this.storage.ready().then(()=>{

                  this.storage.get("token").then(token=>{
                    if(token){
                      this.token = token;
                    }
                  });

                  this.storage.get("rol").then(rol=>{
                    if(rol){
                      this.rol = rol;
                    }
                  });

                  this.storage.get("activo").then(activo=>{
                    if(activo){
                      this.activo = activo;
                    }
                  });

                  this.storage.get("name").then(name=>{
                    if(name){
                      this.name = name;
                    }
                  });

                  this.storage.get("playerID").then(playerID=>{
                    if(playerID){
                      this.player_id = playerID;
                    }
                  });

                  this.storage.get("userImage").then(userImage=>{
                    if(userImage){
                      this.userImage = userImage;
                    }
                  });

                  this.storage.get("paquete_id").then(paquete_id=>{
                    if(paquete_id){
                      this.paquete_id = paquete_id;
                    }
                  });

                  this.storage.get("created_at").then(created_at=>{
                    if(created_at){
                      this.created_at = created_at;
                    }
                  });

                  this.storage.get("id_usuario").then(id_usuario=>{
                    if(id_usuario){
                      this.id_usuario = id_usuario;
                    }
                    resolve();
                  });
              })


        }else{
          //ESCRITORIO
          if(localStorage.getItem("token")){
              //EXISTE ITEMS EN EL LOCALSTORAGE
              this.token = localStorage.getItem("token");
              this.id_usuario = localStorage.getItem("id_usuario");
              this.rol = localStorage.getItem("rol");
              this.activo = localStorage.getItem("activo");
              this.name = localStorage.getItem("name");
              this.player_id = localStorage.getItem("playerID");
              this.userImage = localStorage.getItem("userImage");
              this.paquete_id = localStorage.getItem("paquete_id");
              this.created_at = localStorage.getItem("created_at");

              
          }

          resolve();
          

        }

    });

    return promesa;

    
    
  }

  limpiarDatos(){
    this.token = null;
    this.id_usuario = null;
    this.rol = "INDEFINIDO";
    this.activo = "0";
    this.name = null;
    this.player_id = null;
    this.userImage = "logo.png";
    this.paquete_id = "";
    this.created_at = "";
    this._cpp.misProcesos = [];
    this._cpp.misNotificaciones = [];
    this._cpp.historial =[];
    this._cpp.datosProceso = [];
    this._cpp.procesos = [];
    this._cpp.procesosPorJuzgado = [];
    this._cpp.procesosPorTipo = [];
    this._cpp.procesosPorEstado = [];
    this._cpp.cuentaProcesos = null;

  }

}
