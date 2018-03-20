import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//SERVICIOS
import { CrudPlanProvider } from '../../providers/crud-plan/crud-plan';

//PAGINAS
import { EditarPlanPage, CrearPlanPage } from '../index.paginas';

@Component({
  selector: 'page-planes',
  templateUrl: 'planes.html',
})
export class PlanesPage {

	editarPlan = EditarPlanPage;
	crearPlan = CrearPlanPage;

  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				private _cpp:CrudPlanProvider) {

  	this._cpp.obtenerPlanes();
  }

  buscarPlanes(ev:any){
  	let valor = ev.target.value;
  	this._cpp.buscaPlan(valor);
  }


}
