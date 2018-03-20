import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


//SERVICIOS
import { CrudTipoProcesoProvider } from '../../providers/crud-tipo-proceso/crud-tipo-proceso';

@Component({
  selector: 'page-editar-tipo-proceso',
  templateUrl: 'editar-tipo-proceso.html',
})
export class EditarTipoProcesoPage {

	tipo:any = {};
	nomTipoProceso:string;
	estado:boolean;
	id_tipo:number;

  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				private _ctpp:CrudTipoProcesoProvider) {

  	this.tipo = this.navParams.get("tipo");

  	if(this.tipo.estado === 'INACTIVO'){
  		this.estado = false;
  	}else{
  		this.estado = true;
  	}

  }


  actualizarTipo(tipo:string, estado:boolean, id_tipo:number){

  	let nuevoEstado:string;
  	if(estado){
  		nuevoEstado = 'ACTIVO'
  	}else{
  		nuevoEstado = 'INACTIVO'
  	}

  	this._ctpp.actualizarTipo(tipo, nuevoEstado, id_tipo);

  }


}
