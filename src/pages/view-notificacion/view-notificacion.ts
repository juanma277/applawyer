import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-view-notificacion',
  templateUrl: 'view-notificacion.html',
})
export class ViewNotificacionPage {

	radicado:string;
	mensaje:string;

  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				private viewCtrl:ViewController) {

  	this.radicado = navParams.get('radicado');
    this.mensaje = navParams.get('mensaje');
  }


}
