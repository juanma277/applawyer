import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


//SERVICIOS
import { CarritoProvider } from '../../providers/carrito/carrito';

@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {

	producto: any = {};

  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				private _cs:CarritoProvider) {

  	console.log(this.navParams.get("producto"));
  	this.producto = this.navParams.get("producto");
  }


}
