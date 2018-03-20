import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//SERVICIOS
import { CrudCiudadProvider } from '../../providers/crud-ciudad/crud-ciudad';

//PAGINAS
import { EditarCiudadPage, CrearCiudadPage } from '../index.paginas';

@Component({
  selector: 'page-ciudades',
  templateUrl: 'ciudades.html',
})
export class CiudadesPage {

	editarCiudad = EditarCiudadPage;
	crearCiudad = CrearCiudadPage;

  constructor(	public navCtrl: NavController, 
        				public navParams: NavParams,
                private _ccc:CrudCiudadProvider) {

    this._ccc.obtenerCiudades();
  }


  buscarCiudades(ev:any){
  	let valor = ev.target.value;
  	this._ccc.buscarCiudad(valor);
  }


  inactivarCiudad(id:number){
    this._ccc.inactivarCiudad(id);
  }


 
}
