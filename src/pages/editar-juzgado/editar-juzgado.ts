import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//SERVICIOS
import { CrudJuzgadoProvider } from '../../providers/crud-juzgado/crud-juzgado';
import { CrudCiudadProvider } from '../../providers/crud-ciudad/crud-ciudad';


@Component({
  selector: 'page-editar-juzgado',
  templateUrl: 'editar-juzgado.html',
})
export class EditarJuzgadoPage {

	juzgado:any = {};
	id_ciudad:number;
	estado:boolean;
	id_juzgado:number;

  constructor(	public navCtrl: NavController, 
        				public navParams: NavParams,
        				private _cjp:CrudJuzgadoProvider,
        				private _ccp:CrudCiudadProvider) {

  	this._ccp.ciudadActivas();

  	this.juzgado = this.navParams.get("juzgado");

  	this.id_ciudad = this.juzgado.ciudad_id;

  	if(this.juzgado.estado === 'INACTIVO'){
  		this.estado = false;
  	}else{
  		this.estado = true;
  	}

  
  }

  actualizarJuzgado(nombre:string, estado:boolean, id_ciudad:number, id_juzgado:number){

  	let nuevoEstado:string;
  	if(estado){
  		nuevoEstado = 'ACTIVO'
  	}else{
  		nuevoEstado = 'INACTIVO'
  	}

  	this._cjp.actualizarJuzgado(nombre, id_ciudad, nuevoEstado, id_juzgado);

  }

}
