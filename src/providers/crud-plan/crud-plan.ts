import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';


//URL DEL SERVICIO
import { URL_SERVICIOS_PRODUCCION } from '../../config/url.servicios';


@Injectable()
export class CrudPlanProvider {

	planes:any[] = [];
  planesActivos:any[] = [];

  constructor(	public http: HttpClient,
  				      private alertCtrl:AlertController,
        		    private toastCtrl:ToastController,
                public loadingCtrl: LoadingController) {}

  obtenerPlanes(){
    let loader = this.loadingCtrl.create({
      content: "Cargando ...",
    });
    loader.present();

    let url = URL_SERVICIOS_PRODUCCION + "planes/all";
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
                  this.planes = data['Planes'];
                }

        });
  }

  obtenerPlanesActivos(){
    let loader = this.loadingCtrl.create({
      content: "Cargando ...",
    });
    loader.present();

    let url = URL_SERVICIOS_PRODUCCION + "planes/activos";
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
                  this.planesActivos = data['Planes'];
                }

        });
  }

  crearPlan(nomPlan:string,valor:number,cantidad:number,estado:string,imagen:string){

    let datos ={'nombre':nomPlan, 'valor':valor, 'cantidad':cantidad, 'estado':estado, 'imagen':imagen};

    var url = URL_SERVICIOS_PRODUCCION+'addPlan';

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
              this.obtenerPlanes();  
              resolve();
            }
            
          });
      })

  }

  actualizarPlan(nomPlan:string, valor:number, cantidad:number, imagenPreView:string, estado:string, id_plan:number){

    let datos ={'nombre':nomPlan, 'valor':valor, 'cantidad':cantidad, 'estado':estado, 'imagen':imagenPreView, 'id_plan':id_plan};

    var url = URL_SERVICIOS_PRODUCCION+'modifyPlan';

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
              this.obtenerPlanes();  
              resolve();
            }
            
            });
        })
      
    }

    buscaPlan(termino:string){

    if(termino == ""){
      this.obtenerPlanes();
    }else{
      
      let url = URL_SERVICIOS_PRODUCCION + "planes/buscar/" + termino;
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
                    this.planes = data_resp['Planes'];
                  }
              });
    }

  }

  }
