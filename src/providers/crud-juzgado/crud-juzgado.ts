import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';

//URL DEL SERVICIO
import { URL_SERVICIOS_PRODUCCION } from '../../config/url.servicios';

@Injectable()
export class CrudJuzgadoProvider {

	juzgados:any[] = [];
  juzgadosActivos:any[] = [];
  nombresJuzgado:any = Array();

  constructor(	public http: HttpClient,
        				private alertCtrl:AlertController,
        				private toastCtrl:ToastController,
                public loadingCtrl: LoadingController) {
    
  }


  obtenerJuzgados(){

    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();

    let url = URL_SERVICIOS_PRODUCCION + "juzgados/all";
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
                  this.juzgados = data['Juzgados'];

                }

        });
  }

  obtenerJuzgadosActivos(id_ciudad){

      let promesa = new Promise ((resolve, reject)=>{

         let url = URL_SERVICIOS_PRODUCCION + "juzgados/activo/" + id_ciudad;
            this.http.get(url)
                      .subscribe(data=>{

                        if (data['error']) {
                          // ERROR
                          this.alertCtrl.create({
                              title:'Error!',
                              subTitle:data['Mensaje'],
                              buttons:["Aceptar"]
                            }).present();
                          this.juzgadosActivos = [];
                        }else{
                          this.juzgadosActivos = data['Juzgados'];
                        }

                });

       });

      return promesa;
   
  }

  crearJuzgado(nombre:string, ciudad:number, estado:string){

    let datos ={'nombre':nombre, 'ciudad':ciudad, 'estado':estado};

    var url = URL_SERVICIOS_PRODUCCION+'addJuzgado';

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
              this.obtenerJuzgados();  
              resolve();
            }
            
          });
      })

  }

  actualizarJuzgado(nombre:string, ciudad:number, estado:string, id_juzgado:number ){

    let datos ={'nombre':nombre, 'estado':estado, 'id_ciudad':ciudad, 'id_juzgado':id_juzgado};
   
    var url = URL_SERVICIOS_PRODUCCION+'modifyJuzgado';

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
              this.obtenerJuzgados();  
              resolve();
            }
            
            });
        })
      
    }

    buscarJuzgado(termino:string){

    if(termino == ""){
      this.obtenerJuzgados();  
    }else{
      
      let url = URL_SERVICIOS_PRODUCCION + "juzgado/buscar/" + termino;
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
                    this.juzgados = data_resp['Juzgados'];
                  }
              });
    }

  }

}
