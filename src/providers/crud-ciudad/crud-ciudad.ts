import { HttpClient } from '@angular/common/http';
import { Injectable  } from '@angular/core';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';


//URL DEL SERVICIO
import { URL_SERVICIOS_PRODUCCION } from '../../config/url.servicios';


@Injectable()
export class CrudCiudadProvider {

  ciudades:any[] = [];
  ciudadesActivas:any[];

  constructor(	public http: HttpClient,
        				private alertCtrl:AlertController,
        				private toastCtrl:ToastController,
                public loadingCtrl: LoadingController) {}

  actualizarCiudad(nombre:string, estado:string, id_ciudad:number){

  	let datos ={'nombre':nombre, 'estado':estado, 'id_ciudad':id_ciudad};

  	var url = URL_SERVICIOS_PRODUCCION+'modifyCiudad';

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
						    });

						  toast.present();
  						this.obtenerCiudades();  
              resolve();
  					}
  					
    				});
    		})
      
    }


  obtenerCiudades(){

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
    });
    loader.present();

    let url = URL_SERVICIOS_PRODUCCION + "ciudades/all";
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
                  this.ciudades = data['ciudades'];
                }

        });
  }

  ciudadActivas(){
    let url = URL_SERVICIOS_PRODUCCION + "ciudades/activas";
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
                  this.ciudadesActivas = data['ciudades'];
                }

        });
  }



  crearCiudad(nombre:string, estado:string){

    let datos ={'nombre':nombre, 'estado':estado};

    var url = URL_SERVICIOS_PRODUCCION+'addCiudad';

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
              this.obtenerCiudades();  
              resolve();
            }
            
          });
      })

  }


  buscarCiudad(termino:string){

    if(termino == ""){
      this.obtenerCiudades();  
    }else{
      
      let url = URL_SERVICIOS_PRODUCCION + "ciudad/buscar/" + termino;
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
                    this.ciudades = data_resp['Ciudades'];
                  }
              });
    }

  }



  inactivarCiudad(id_ciudad:number){

    let datos ={'id_ciudad':id_ciudad};
   
    var url = URL_SERVICIOS_PRODUCCION+'modifyCiudad/'+id_ciudad;

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
                    
                    let toast = this.toastCtrl.create({
                        message: data_resp['Mensaje'],
                        duration: 3000
                      });
                    
                    toast.present();

                    this.obtenerCiudades();
                  }
              });
      
    }



}
