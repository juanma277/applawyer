import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//SERVICIOS
import { CrudJuzgadoProvider } from '../../providers/crud-juzgado/crud-juzgado';
import { CrudCiudadProvider  } from '../../providers/crud-ciudad/crud-ciudad';

@Component({
  selector: 'page-crear-juzgado',
  templateUrl: 'crear-juzgado.html',
})
export class CrearJuzgadoPage {

	nomJuzgado:string;
	ciudad:number;
	estado:string;


  constructor(	public navCtrl: NavController, 
        				public navParams: NavParams,
        				private _cjp:CrudJuzgadoProvider,
        				private _ccp:CrudCiudadProvider) {

  	this._ccp.ciudadActivas();
  }

  crearJuzgado(nomJuzgado:string, ciudad:number, estado:boolean){

  	let nuevoEstado:string;
  	if(estado){
  		nuevoEstado = 'ACTIVO'
  	}else{
  		nuevoEstado = 'INACTIVO'
  	}

  	this._cjp.crearJuzgado(nomJuzgado, ciudad, nuevoEstado);

  } 



}
