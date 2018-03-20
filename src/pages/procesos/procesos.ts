import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//SERVICIOS
import { CrudProcesosProvider } from '../../providers/crud-procesos/crud-procesos';

//PAGINAS
import { HistorialPage } from '../../pages/historial/historial';
import { CrearProcesoPage } from '../../pages/crear-proceso/crear-proceso';
import { EditarProcesoPage } from '../../pages/editar-proceso/editar-proceso';


@Component({
  selector: 'page-procesos',
  templateUrl: 'procesos.html',
})
export class ProcesosPage {
	
	verHistorial = HistorialPage;
	crearProceso = CrearProcesoPage;
	editarProcesoPage = EditarProcesoPage;

  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				private _cpp:CrudProcesosProvider) {

  	this._cpp.obtenerProcesosAll();
  }

    buscarProceso(ev:any){
  	let valor = ev.target.value;
  	this._cpp.buscarProcesoAll(valor);
  }

}
