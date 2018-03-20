import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ViewController } from 'ionic-angular';

//SERVICIO PARA CONSULTAR EL HISTORIAL DEL PROCESO
import { CrudProcesosProvider } from '../../providers/crud-procesos/crud-procesos';
 
@Component({
  selector: 'page-view-proceso',
  templateUrl: 'view-proceso.html',
})
export class ViewProcesoPage {

	historial:any = {};
	datosProceso:any = {};
  id_proceso: number;
  demandante:string;
  demandado:string;
  radicado:string;
  actuacion:string;
  anotacion:string;
  despacho:string;
  tipoProceso:string;



  constructor(	public navCtrl: NavController, 
  				params: NavParams,
  				private alertCtrl:AlertController,
          private viewCtrl:ViewController) {

    this.id_proceso = params.get('ID');
    this.demandante = params.get('demandante');
    this.demandado = params.get('demandado');
    this.radicado = params.get('radicado');
    this.actuacion = params.get('actuacion');
    this.anotacion = params.get('anotacion');
    this.despacho = params.get('despacho');
    this.tipoProceso = params.get('tipoProceso');

    

 
  }

 
}
