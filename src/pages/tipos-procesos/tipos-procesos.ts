import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//SERVICIOS
import { CrudTipoProcesoProvider } from '../../providers/crud-tipo-proceso/crud-tipo-proceso';

//PAGINAS
import { EditarTipoProcesoPage, CrearTipoProcesoPage } from '../index.paginas';

@Component({
  selector: 'page-tipos-procesos',
  templateUrl: 'tipos-procesos.html',
})
export class TiposProcesosPage {

	editarTipo = EditarTipoProcesoPage;
	crearTipo = CrearTipoProcesoPage;

  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				private _ctpp:CrudTipoProcesoProvider) {

  	this._ctpp.obtenerTipos();
  }

  buscarTipos(ev:any){
  	let valor = ev.target.value;
  	this._ctpp.buscaTipo(valor);
  }

 
}
