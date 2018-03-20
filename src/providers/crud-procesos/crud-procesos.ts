import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';

//URL DEL SERVICIO
import { URL_SERVICIOS_PRODUCCION } from '../../config/url.servicios';

@Injectable()
export class CrudProcesosProvider {

	misProcesos:any[] = [];
  procesosAll:any[] = [];
  misNotificaciones:any[] = [];
	historial:any[] = [];
  datosProceso:any[] = [];
  pagina:number = 0;
  procesos:any[] = [];
  procesosPorJuzgado:any[] = [];
  procesosPorTipo:any[] = [];
  procesosPorEstado:any[] = [];
  procesosPorCiudad:any[] = [];
  notificacionesActivas: number[] = [];
  cuentaProcesos:number;
  cuentaProcesosAll:number;


  constructor(	public http: HttpClient,
  				      private alertCtrl:AlertController,
        		    private toastCtrl:ToastController,
                public loadingCtrl: LoadingController) {

  }

  obtenerProcesos(id_usuario:number){
     let loader = this.loadingCtrl.create({
      content: "Por favor espere...",
    });
    loader.present();

    let url = URL_SERVICIOS_PRODUCCION + "procesos/misProcesos/"+ id_usuario;
    this.http.get(url)
              .subscribe(data=>{

                if (data['error']) {
                  // ERROR
                  loader.dismiss();
                  this.alertCtrl.create({
                    title:'Advertencia!',
                    subTitle:data['Mensaje'],
                    buttons:["Aceptar"]
                  }).present();
                }else{
                  loader.dismiss();
                  this.misProcesos = data['Procesos'];
                  this.cuentaProcesos = data['Cuenta'];
                }

        });
  }

  obtenerProcesosAll(){
     let loader = this.loadingCtrl.create({
      content: "Por favor espere...",
    });
    loader.present();

    let url = URL_SERVICIOS_PRODUCCION + "procesosAPI";
    this.http.get(url)
              .subscribe(data=>{

                if (data['error']) {
                  // ERROR
                  loader.dismiss();
                  this.alertCtrl.create({
                    title:'Advertencia!',
                    subTitle:data['Mensaje'],
                    buttons:["Aceptar"]
                  }).present();
                }else{
                  loader.dismiss();
                  this.procesosAll = data['Procesos'];
                  this.cuentaProcesosAll = data['Cuenta'];
                }

        });
  }

  obtenerNotificaciones(id_usuario:number){
     let loader = this.loadingCtrl.create({
      content: "Por favor espere...",
    });
    loader.present();

    let url = URL_SERVICIOS_PRODUCCION + "notificaciones/misNotificaciones/"+ id_usuario;
    this.http.get(url)
              .subscribe(data=>{

                if (data['error']) {
                  // ERROR
                  loader.dismiss();
                  this.alertCtrl.create({
                    title:'Advertencia!',
                    subTitle:data['Mensaje'],
                    buttons:["Aceptar"]
                  }).present();
                }else{
                  loader.dismiss();
                  this.misNotificaciones = data['Notificaciones'];
                  this.notificacionesActivas = data['Cuenta'];
                }

        });
  }


  procesosJuzgado(id_usuario:number){
     let promesa = new Promise ((resolve, reject)=>{


        let url = URL_SERVICIOS_PRODUCCION+ "procesosPorJuzgado/"+ id_usuario;
          this.http.get(url).subscribe(res =>{
            if(res['error']){
              //ERROR
              this.alertCtrl.create({
                    title:'Error!',
                    subTitle:res['Mensaje'],
                    buttons:["Aceptar"]
                  }).present();

            }else{
              this.procesosPorJuzgado = res['procesosChart'];
              //console.log(this.procesosPorJuzgado);
            }

            resolve();
          })

    });

    return promesa;
  }

  procesosTipo(id_usuario:number){
     let promesa = new Promise ((resolve, reject)=>{


        let url = URL_SERVICIOS_PRODUCCION+ "procesosPorTipo/"+ id_usuario;
          this.http.get(url).subscribe(res =>{
            if(res['error']){
              //ERROR
              this.alertCtrl.create({
                    title:'Error!',
                    subTitle:res['Mensaje'],
                    buttons:["Aceptar"]
                  }).present();

            }else{
              this.procesosPorTipo = res['procesosChart'];
              //console.log(this.procesosPorTipo);
            }

            resolve();
          })

    });

    return promesa;
  }

  procesosCiudad(id_usuario:number){
     let promesa = new Promise ((resolve, reject)=>{


        let url = URL_SERVICIOS_PRODUCCION+ "procesosPorCiudad/"+ id_usuario;
          this.http.get(url).subscribe(res =>{
            if(res['error']){
              //ERROR
              this.alertCtrl.create({
                    title:'Error!',
                    subTitle:res['Mensaje'],
                    buttons:["Aceptar"]
                  }).present();

            }else{
              this.procesosPorCiudad = res['procesosChart'];
              //console.log(this.procesosPorTipo);
            }

            resolve();
          })

    });

    return promesa;
  }

  procesosEstado(id_usuario:number){
     let promesa = new Promise ((resolve, reject)=>{


        let url = URL_SERVICIOS_PRODUCCION+ "procesosPorEstado/"+ id_usuario;
          this.http.get(url).subscribe(res =>{
            if(res['error']){
              //ERROR
              this.alertCtrl.create({
                    title:'Error!',
                    subTitle:res['Mensaje'],
                    buttons:["Aceptar"]
                  }).present();

            }else{
              this.procesosPorEstado = res['procesosChart'];
              console.log(this.procesosPorEstado);
            }

            resolve();
          })

    });

    return promesa;
  }

  procesosUsuario(id_usuario:number){
    
   let promesa = new Promise ((resolve, reject)=>{


        let url = URL_SERVICIOS_PRODUCCION+ "procesos/misProcesosPagina/"+ id_usuario+ "/" + this.pagina;
          this.http.get(url).subscribe(res =>{
            if(res['error']){
              //ERROR
              this.alertCtrl.create({
                    title:'Error!',
                    subTitle:res['Mensaje'],
                    buttons:["Aceptar"]
                  }).present();

            }else{

              let nuevaData = this.agrupar(res['Procesos'],2);
              this.procesos.push(...nuevaData);
              this.pagina = this.pagina + 1;
            }

            resolve();
          })

    });

    return promesa;

  }

  obtenerHistorial(id_proceso:number){
    
    let url = URL_SERVICIOS_PRODUCCION + "procesos/historial/"+ id_proceso;
    this.http.get(url)
              .subscribe(data=>{

                if (data['error']) {
                  // ERROR
                  this.historial = null;
                  this.alertCtrl.create({
                    title:'Advertencia!',
                    subTitle:data['Mensaje'],
                    buttons:["Aceptar"]
                  }).present();
                }else{
                  this.historial = data['Historial'];
                  this.datosProceso = data['Proceso'];
                }

        });
  }

  obtenerHistorialUpdateNotificacion(id_proceso:number, id_notificacion:number, id_user:number){
    
    let url = URL_SERVICIOS_PRODUCCION + "procesos/historial/notificacion/"+ id_proceso +"/"+id_notificacion;
    this.http.get(url)
              .subscribe(data=>{

                if (data['error']) {
                  // ERROR
                  this.historial = null;
                  this.alertCtrl.create({
                    title:'Advertencia!',
                    subTitle:data['Mensaje'],
                    buttons:["Aceptar"]
                  }).present();
                }else{
                  this.historial = data['Historial'];
                  this.datosProceso = data['Proceso'];
                  this.obtenerNotificaciones(id_user);

                }

        });
  }

  buscarProceso(termino:string, id_usuario:number){

    if(termino == ""){
      this.obtenerProcesos(id_usuario);  
    }else{
      
      let url = URL_SERVICIOS_PRODUCCION + "proceso/buscar/" + termino;
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
                    this.misProcesos = data_resp['Procesos'];
                  }
              });
    }

  }

  buscarProcesoAll(termino:string){

    if(termino == ""){
      this.obtenerProcesosAll();  
    }else{
      
      let url = URL_SERVICIOS_PRODUCCION + "proceso/buscar/" + termino;
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
                    this.procesosAll = data_resp['Procesos'];
                    this.cuentaProcesosAll = data_resp['Cuenta'];
                  }
              });
    }

  }

  crearProceso(user_id:number, tipoProceso:number, ciudad:number, juzgado:number, radicado:string, demandante:string, demandado:string, fecha:string, estado:string){

    let datos ={'user_id':user_id, 'tipoProceso':tipoProceso, 'ciudad':ciudad, 'juzgado':juzgado, 'radicado':radicado, 'demandante':demandante, 'demandado':demandado, 'fecha':fecha, 'estado':estado };

    var url = URL_SERVICIOS_PRODUCCION+'addProceso';

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
              this.obtenerProcesos(user_id);  
              resolve();
            }
            
          });
      })

  }

  editarProceso(id_tipo_proceso:number, id_ciudad:number, id_juzgado:number, radicado:string, demandante:string, demandado:string, fecha:string, estado:string, id_proceso:number, user_id:number){

      let datos ={'id_proceso':id_proceso, 'tipo_proceso_id':id_tipo_proceso, 'ciudad_id':id_ciudad, 'juzgado_id':id_juzgado, 'radicado':radicado, 'demandante':demandante, 'demandado':demandado, 'fechaRadicado':fecha, 'estado':estado };

    var url = URL_SERVICIOS_PRODUCCION+'modifyProceso';

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
              this.obtenerProcesosAll();  
              resolve();
            }
            
          });
      })


  }

  private agrupar(arr:any, tamano:number){

    let nuevoArreglo = [];

    for (let i = 0; i<arr.length;i+=tamano) {
      nuevoArreglo.push(arr.slice(i,i+tamano));
    }
    console.log(nuevoArreglo);
    return nuevoArreglo;
  }

}
