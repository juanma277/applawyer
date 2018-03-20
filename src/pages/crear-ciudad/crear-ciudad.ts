import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


//SERVICIOS
import { CrudCiudadProvider } from '../../providers/crud-ciudad/crud-ciudad';

@Component({
  selector: 'page-crear-ciudad',
  templateUrl: 'crear-ciudad.html',
})
export class CrearCiudadPage {

	nomCiudad:string;
	estado:string;

  constructor(	public navCtrl: NavController, 
        				public navParams: NavParams,
        				private _crud:CrudCiudadProvider) {
  }

  crearCiudad(ciudad:string, estado:boolean){

  	let nuevoEstado:string;
  	if(estado){
  		nuevoEstado = 'ACTIVO'
  	}else{
  		nuevoEstado = 'INACTIVO'
  	}

  	this._crud.crearCiudad(ciudad, nuevoEstado);

  } 

}
