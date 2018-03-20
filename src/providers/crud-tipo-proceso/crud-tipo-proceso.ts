import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';

//URL DEL SERVICIO
import { URL_SERVICIOS_PRODUCCION } from '../../config/url.servicios';

@Injectable()
export class CrudTipoProcesoProvider {

	tipos:any[] = [];
  tisposProcesosActivos:any[] =[];

  constructor(	public http: HttpClient,
  				private alertCtrl:AlertController,
  				private toastCtrl:ToastController,
          public loadingCtrl: LoadingController) {

    
  }


  obtenerTipos(){
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();

    let url = URL_SERVICIOS_PRODUCCION + "tipos/all";
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
                  this.tipos = data['Tipos'];
                }

        });
  }

  crearTipo(nombre:string, estado:string){

    let datos ={'nombre':nombre, 'estado':estado};

    var url = URL_SERVICIOS_PRODUCCION+'addTipo';

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
              this.obtenerTipos();  
              resolve();
            }
            
          });
      })

  }

  tipoProcesoActivo(){
    let url = URL_SERVICIOS_PRODUCCION + "tipo/activo";
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
                  this.tisposProcesosActivos = data['Tipos'];
                }

        });
  }

  actualizarTipo(nombre:string, estado:string, id_tipo:number){

    let datos ={'nombre':nombre, 'estado':estado, 'id_tipo':id_tipo};

    var url = URL_SERVICIOS_PRODUCCION+'modifyTipo';

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
              this.obtenerTipos();  
              resolve();
            }
            
            });
        })
      
    }


    buscaTipo(termino:string){

    if(termino == ""){
      this.obtenerTipos();  
    }else{
      
      let url = URL_SERVICIOS_PRODUCCION + "tipo/buscar/" + termino;
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
                    this.tipos = data_resp['Tipos'];
                  }
              });
    }

  }

}
