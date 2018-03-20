import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//SERVICIOS
import { CrudProcesosProvider } from '../../providers/crud-procesos/crud-procesos';
import { UsuarioProvider } from '../../providers/usuario/usuario';

//PAGINAS
import { HistorialPage } from '../../pages/historial/historial';
import { CrearProcesoPage } from '../../pages/crear-proceso/crear-proceso';

@Component({
  selector: 'page-mis-procesos',
  templateUrl: 'mis-procesos.html',
})
export class MisProcesosPage {

	verHistorial = HistorialPage;
	crearProceso = CrearProcesoPage;

	id_usuario:number;

  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				private _cpp:CrudProcesosProvider,
  				private _up:UsuarioProvider) {

  	this.id_usuario = parseInt(this._up.id_usuario);
  	this._cpp.obtenerProcesos(this.id_usuario);
  }

    buscarProceso(ev:any){
  	let valor = ev.target.value;
  	this._cpp.buscarProceso(valor, this.id_usuario);
  }

}
