import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';


//URL DEL SERVICIO
import { URL_SERVICIOS_PRODUCCION } from '../../config/url.servicios';


@Injectable()
export class CrudUsuarioProvider {

	usuarios:any[] = [];
  usuariosActivos:any[];
  perfilUsuario:any[] = [];
  procesosPorUsuario:number;
  plan_id:number;
  ciudad_id:number;

  constructor(	public http: HttpClient,
  				      private alertCtrl:AlertController,
        		    private toastCtrl:ToastController,
                public loadingCtrl: LoadingController) {
  }


  perfil(id_usuario:number){

    let url = URL_SERVICIOS_PRODUCCION + "usuario/perfil/" + id_usuario;
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
                  this.perfilUsuario = data['User'];
                  this.procesosPorUsuario = data['Procesos'];
                  this.plan_id = data['paquete_id'];
                  this.ciudad_id = data['ciudad_id'];
                }

        });


  }

  obtenerUsuarios(){
     let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();

    let url = URL_SERVICIOS_PRODUCCION + "usuarios/all";
    this.http.get(url)
              .subscribe(data=>{

                if (data['error']) {
                  // ERROR
                  loader.dismiss();
                  this.alertCtrl.create({
                    title:'Error!',
                    subTitle:data['Mensaje'],
                    buttons:["Aceptar"]
                  }).present();
                }else{
                  loader.dismiss();
                  this.usuarios = data['Users'];
                }

        });
  }

  actualizarUsuario(id_user:number, nombres:string, apellidos:string, tipo_identificacion:string, identificacion:string, telefono:string, email:string, direccion:string, genero:string, rol:string, estado:string){

  	let datos ={'id_user':id_user, 'nombres':nombres, 'apellidos':apellidos, 'tipo_identificacion':tipo_identificacion, 'identificacion':identificacion, 'genero':genero, 'email':email, 'telefono':telefono, 'direccion':direccion, 'rol':rol, 'estado':estado};

  	var url = URL_SERVICIOS_PRODUCCION+'modifyUser';

  	return new Promise(resolve=>{
  			this.http.post(url,datos)
  				.subscribe(resp=>{

  					let data_resp = resp;

  					if(data_resp['error']){
  						this.alertCtrl.create({
  							title:'Error!',
  							subTitle:data_resp['Mensaje'],
  							buttons:["Aceptar"]
  						}).present();
  					}else{

  						let toast = this.toastCtrl.create({
						      message: data_resp['Mensaje'],
						      duration: 3000
						    });

						  toast.present();
  						this.obtenerUsuarios(); 
              resolve();
  					}
  					
    				});
    		})
      
    }

    actualizarPerfil(id_user:number, nombres:string, apellidos:string, tipo_identificacion:string, identificacion:string, telefono:string, email:string, direccion:string, genero:string){

    let datos ={'id_user':id_user, 'nombres':nombres, 'apellidos':apellidos, 'tipo_identificacion':tipo_identificacion, 'identificacion':identificacion, 'genero':genero, 'email':email, 'telefono':telefono, 'direccion':direccion};

    var url = URL_SERVICIOS_PRODUCCION+'modifyPerfil';

    return new Promise(resolve=>{
        this.http.post(url,datos)
          .subscribe(resp=>{

            let data_resp = resp;

            if(data_resp['error']){
              this.alertCtrl.create({
                title:'Error!',
                subTitle:data_resp['Mensaje'],
                buttons:["Aceptar"]
              }).present();
            }else{

              let toast = this.toastCtrl.create({
                  message: data_resp['Mensaje'],
                  duration: 3000
                });

              toast.present();
              this.obtenerUsuarios();  
              this.perfil(id_user);
              resolve();
            }
            
            });
        })
      
    }

    actualizarPerfilPass(id_user:number, nombres:string, apellidos:string, tipo_identificacion:string, identificacion:string, telefono:string, email:string, direccion:string, genero:string, pass1:string){

    let datos ={'id_user':id_user, 'nombres':nombres, 'apellidos':apellidos, 'tipo_identificacion':tipo_identificacion, 'identificacion':identificacion, 'genero':genero, 'email':email, 'telefono':telefono, 'direccion':direccion, 'password':pass1};

    var url = URL_SERVICIOS_PRODUCCION+'modifyPerfilPass';

    return new Promise(resolve=>{
        this.http.post(url,datos)
          .subscribe(resp=>{

            let data_resp = resp;

            if(data_resp['error']){
              this.alertCtrl.create({
                title:'Error!',
                subTitle:data_resp['Mensaje'],
                buttons:["Aceptar"]
              }).present();
            }else{

              let toast = this.toastCtrl.create({
                  message: data_resp['Mensaje'],
                  duration: 3000
                });

              toast.present();
              this.obtenerUsuarios();  
              this.perfil(id_user);
              resolve();
            }
            
            });
        })
      
    }

    actualizarPerfilPassImage(id_user:number, nombres:string, apellidos:string, tipo_identificacion:string, identificacion:string, telefono:string, email:string, direccion:string, genero:string, pass1:string, imagen:string){

    let datos ={'id_user':id_user, 'nombres':nombres, 'apellidos':apellidos, 'tipo_identificacion':tipo_identificacion, 'identificacion':identificacion, 'genero':genero, 'email':email, 'telefono':telefono, 'direccion':direccion, 'password':pass1, 'imagen':imagen};

    var url = URL_SERVICIOS_PRODUCCION+'modifyPerfilPassImage';

    return new Promise(resolve=>{
        this.http.post(url,datos)
          .subscribe(resp=>{

            let data_resp = resp;

            if(data_resp['error']){
              this.alertCtrl.create({
                title:'Error!',
                subTitle:data_resp['Mensaje'],
                buttons:["Aceptar"]
              }).present();
            }else{

              let toast = this.toastCtrl.create({
                  message: data_resp['Mensaje'],
                  duration: 3000
                });

              toast.present();
              this.obtenerUsuarios();  
              this.perfil(id_user);
              resolve();
            }
            
            });
        })
      
    }

    actualizarPerfilImage(id_user:number, nombres:string, apellidos:string, tipo_identificacion:string, identificacion:string, telefono:string, email:string, direccion:string, genero:string, imagen:string){

    let datos ={'id_user':id_user, 'nombres':nombres, 'apellidos':apellidos, 'tipo_identificacion':tipo_identificacion, 'identificacion':identificacion, 'genero':genero, 'email':email, 'telefono':telefono, 'direccion':direccion, 'imagen':imagen};

    var url = URL_SERVICIOS_PRODUCCION+'modifyPerfilImage';

    return new Promise(resolve=>{
        this.http.post(url,datos)
          .subscribe(resp=>{

            let data_resp = resp;

            if(data_resp['error']){
              this.alertCtrl.create({
                title:'Error!',
                subTitle:data_resp['Mensaje'],
                buttons:["Aceptar"]
              }).present();
            }else{

              let toast = this.toastCtrl.create({
                  message: data_resp['Mensaje'],
                  duration: 3000
                });

              toast.present();
              this.obtenerUsuarios();  
              this.perfil(id_user);
              resolve();
            }
            
            });
        })
      
    }

    crearUsuario(nombres:string, apellidos:string, tipo_identificacion:string, identificacion:string, telefono:string, email:string, direccion:string, genero:string, rol:string, estado:string){

    let datos ={'nombres':nombres, 'apellidos':apellidos, 'tipo_identificacion':tipo_identificacion, 'identificacion':identificacion, 'rol':rol, 'telefono':telefono, 'email':email, 'direccion':direccion, 'estado':estado};

    var url = URL_SERVICIOS_PRODUCCION+'addUser';

    return new Promise(resolve=>{
        this.http.post(url,datos)
          .subscribe(resp=>{

            let data_resp = resp;

            if(data_resp['error']){
              this.alertCtrl.create({
                title:'Error!',
                subTitle:data_resp['Mensaje'],
                buttons:["Aceptar"]
              }).present();
            }else{

              let toast = this.toastCtrl.create({
                  message: data_resp['Mensaje'],
                  duration: 3000
                });

              toast.present();
              this.obtenerUsuarios();  
              resolve();
            }
            
          });
      })

  }

   resetPassword(id_user:number,identificacion:string){

   	let datos ={'id_user':id_user, 'identificacion':identificacion};

  	var url = URL_SERVICIOS_PRODUCCION+'usuario/reset/password';

  	return new Promise(resolve=>{
  			this.http.post(url,datos)
  				.subscribe(resp=>{

  					let data_resp = resp;

  					if(data_resp['error']){
  						this.alertCtrl.create({
  							title:'Error!',
  							subTitle:data_resp['Mensaje'],
  							buttons:["Aceptar"]
  						}).present();
  					}else{

  						let toast = this.toastCtrl.create({
						      message: data_resp['Mensaje'],
						      duration: 3000
						    });

						  toast.present();
  						this.obtenerUsuarios();  
              		resolve();
  					}
  					
    				});
    		})

   }

   buscaUsuario(termino:string){

    if(termino == ""){
      this.obtenerUsuarios();  
    }else{
      
      let url = URL_SERVICIOS_PRODUCCION + "users/buscar/" + termino;
      this.http.get(url)
              .subscribe(resp=>{

                let data_resp = resp;

                if(data_resp['error']){

                    let toast = this.toastCtrl.create({
                        message: data_resp['Mensaje'],
                        duration: 3000
                      });
                    toast.present();

                  }else{
                    this.usuarios = data_resp['Usuarios'];
                  }
              });
    }

  }

}
