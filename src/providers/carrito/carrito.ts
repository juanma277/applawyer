import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AlertController,ToastController, ModalController } from 'ionic-angular';

//SERVICIOS
import { UsuarioProvider } from '../usuario/usuario';
import { LoadstoraProvider } from '../loadstora/loadstora';

//PAGINAS
import { CarritoPage } from '../../pages/carrito/carrito';
import { LoginPage } from '../../pages/login/login';


@Injectable()
export class CarritoProvider {


  constructor(  public http: HttpClient,
  			        private alertCtrl:AlertController,
  			        private toastCtrl: ToastController,
                private modalCtrl:ModalController,
                private _us:UsuarioProvider,
                private _ls:LoadstoraProvider) {
    console.log('Hello CarritoProvider Provider');
    this._ls.cargarStorage();
  }

  verCarrito(){

    let modal:any;

    if(this._us.token){
      //MOSTRAR PAGINA DEL CARRITO
      modal = this.modalCtrl.create(CarritoPage);
    }else{
      //MOSTRAR LOGIN
      modal = this.modalCtrl.create(LoginPage);
    }

    modal.present();

    modal.onDidDismiss((abrirCarrito:boolean)=>{
      if(abrirCarrito){
        this.modalCtrl.create(CarritoPage).present();
      }
    })

  }

  agregarCarrito(item_parametro:any){

  	for(let item of this._ls.items){
  		if(item.codigo == item_parametro.codigo){
  			
  			this.alertCtrl.create({
  				title:"Item Existe",
  				subTitle: "<b>"+item_parametro.producto + "</b>, ya se encuentra agregado en el carrito.",
  				buttons:["Aceptar"]
  			}).present();

  			return;
  		}
  	}

  	this._ls.items.push(item_parametro);
    this._ls.guardarStorage();

  	this.toastCtrl.create({
  		message:'Producto Agregado Correctamente.',
  		duration: 3000
  	}).present();

  	

  }

  

}
