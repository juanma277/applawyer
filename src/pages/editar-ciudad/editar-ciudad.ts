import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

//SERVICIOS
import { CrudCiudadProvider } from '../../providers/crud-ciudad/crud-ciudad';

@Component({
  selector: 'page-editar-ciudad',
  templateUrl: 'editar-ciudad.html',
})
export class EditarCiudadPage {

	ciudad:any = {};
	nomCiudad:string;
	estado:boolean;
	id_ciudad:number;


  constructor(	public navCtrl: NavController, 
        				public navParams: NavParams,
        				private viewCtrl:ViewController,
        				private _crud:CrudCiudadProvider) {
	
  	this.ciudad = this.navParams.get("ciudad");

  	if(this.ciudad.estado === 'INACTIVO'){
  		this.estado = false;
  	}else{
  		this.estado = true;
  	}
  	
  }

  actualizarCiudad(ciudad:string, estado:boolean, id_ciudad:number){

  	let nuevoEstado:string;
  	if(estado){
  		nuevoEstado = 'ACTIVO'
  	}else{
  		nuevoEstado = 'INACTIVO'
  	}

  	this._crud.actualizarCiudad(ciudad, nuevoEstado, id_ciudad);

  }


 

}
