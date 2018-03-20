import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

//SERVICIOS
import { CrudPlanProvider } from '../../providers/crud-plan/crud-plan';

@Component({
  selector: 'page-comprar-plan',
  templateUrl: 'comprar-plan.html',
})
export class ComprarPlanPage {

	usuario:any={};
	usuario_id:number;
	paquete:boolean= true;
	planes: Array<{id:number, nombre:string, valor:string, cantidad:number, image:string, estado:string, created_at:string, updated_at:string}>;

  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				private _cpp:CrudPlanProvider,
  				private alertCtrl:AlertController) {

  	this.usuario = this.navParams.get("usuario");
  	this.usuario_id = this.usuario.id;

  	this._cpp.obtenerPlanesActivos();
  	this.planes = this._cpp.planesActivos;

  	
  }


  presentPrompt($id:number) {
  let alert = this.alertCtrl.create({
    title: 'Medio de Pago',
    inputs: [
      {
        	type: 'radio',
            label: 'PayPal',
            value: '1'
      },
      {
	        type: 'radio',
            label: 'Consignación',
            value: '2'
      }
    ],
    buttons: [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: data => {
        }
      },
      {
        text: 'Aceptar',
        handler: data => {
         console.log('Login clicked: '+$id+" "+data);
        }
      }
    ]
  });
  alert.present();
}



}
