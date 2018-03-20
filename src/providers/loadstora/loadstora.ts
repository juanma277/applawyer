import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Platform,AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';


//SERVICIOS
import { URL_SERVICIOS_PRODUCCION } from '../../config/url.servicios';
import { UsuarioProvider } from '../usuario/usuario';


@Injectable()
export class LoadstoraProvider {

	items:any[] = [];
  totalPagar :number = 0;
  ordenes:any[] =[];
  confirm:boolean = false;

  constructor(	public http: HttpClient,
        				private platform:Platform,
        				private storage:Storage,
                private _us:UsuarioProvider,
                private alertCtrl:AlertController) {
    
  }

  public guardarStorage(){

    if(this.platform.is("cordova")){
      //DISPOSITIVO
      this.storage.set('items',this.items);
    }else{
      //ESCRITORIO
      localStorage.setItem("items",JSON.stringify(this.items));
    }



  }

  cargarStorage(){

    let promesa = new Promise ((resolve, reject)=>{

      if(this.platform.is("cordova")){
          //DISPOSITIVO

          this.storage.ready().then(()=>{

                  this.storage.get("items").then(items=>{
                    if(items){
                      this.items = items;
                    }
                    resolve();
                  });
              })


        }else{
          //ESCRITORIO
          if(localStorage.getItem("items")){
              //EXISTE ITEMS EN EL LOCALSTORAGE
              this.items = JSON.parse(localStorage.getItem("items"));
          }

          resolve();
          

        }

    });

    return promesa;

    
    
  }

  realizarPedido(){

    let codigos:string[]=[];

    for (let item of this.items){
      codigos.push(item.codigo);
    }

    let datos ={'items':codigos.join(",")};

    let url = `${URL_SERVICIOS_PRODUCCION}pedidos/orden/${this._us.token}/${this._us.id_usuario}`; 

    this.http.post(url, datos)
             .subscribe(resp=>{
               let respuesta = resp;
               if(respuesta['error']){
                 //MOSTRAR ERROR
                 this.alertCtrl.create({
                   title:'Error',
                   subTitle: respuesta['Mensaje'],
                   buttons: ['Aceptar']
                 }).present();
               }else{
                 //SIN ERRORES
                 
                 this.items= [];
                 this.guardarStorage();
                 this.alertCtrl.create({
                   title:'Orden Realizada',
                   subTitle:'Nos contactaremos con usted.',
                   buttons: ['Aceptar']
                 }).present();
               }
             });

  }

  actualizarTotal(){

    this.totalPagar = 0;

    for(let item of this.items){
      this.totalPagar += Number(item.precio_compra);
    }


  }

  removeItem(index:number){

    this.items.splice(index,1);
    this.guardarStorage();
    this.actualizarTotal();


  }

  cargarOrdenes(){
    
    let url = `${URL_SERVICIOS_PRODUCCION}pedidos/obtener/${this._us.token}/${this._us.id_usuario}`; 

    this.http.get(url)
              .subscribe(resp=>{

                let respuesta = resp;

                if(respuesta['error']){
                 //MOSTRAR EL ERROR
                  this.alertCtrl.create({
                   title:'Error',
                   subTitle: respuesta['Mensaje'],
                   buttons: ['Aceptar']
                 }).present();
                }else{
                  this.ordenes = respuesta['Ordenes'];
                }

              });
  }

  borrarOrden(orden_id:string){

     

      let url = `${URL_SERVICIOS_PRODUCCION}pedidos/delete/${this._us.token}/${this._us.id_usuario}/${orden_id}`;

      return new Promise(resolve=>{
        this.http.delete(url)
          .subscribe(resp=>{

            this.items= [];
            this.guardarStorage();
            //let data_resp = resp;
            resolve();
            
          });
      })

  }

}
