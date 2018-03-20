import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//SERVICIOS
import { CrudTipoProcesoProvider } from '../../providers/crud-tipo-proceso/crud-tipo-proceso';

@Component({
  selector: 'page-crear-tipo-proceso',
  templateUrl: 'crear-tipo-proceso.html',
})
export class CrearTipoProcesoPage {

	nomTipoProceso:string;
	estado:string;

  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				private _ctpp:CrudTipoProcesoProvider) {
  }


  crearTipo(tipo:string, estado:boolean){

  	let nuevoEstado:string;
  	if(estado){
  		nuevoEstado = 'ACTIVO'
  	}else{
  		nuevoEstado = 'INACTIVO'
  	}

  	this._ctpp.crearTipo(tipo, nuevoEstado);

  } 


}
