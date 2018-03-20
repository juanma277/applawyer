import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

//SERVICIOS
import { LoadstoraProvider } from '../../providers/loadstora/loadstora';


@Component({
  selector: 'page-carrito',
  templateUrl: 'carrito.html',
})
export class CarritoPage {

	constructor(	public navCtrl: NavController,
        			public navParams: NavParams,
                 	private _ls:LoadstoraProvider,
                 	private viewCtrl:ViewController){

    this._ls.cargarStorage();
    this._ls.actualizarTotal();
  } 


}
