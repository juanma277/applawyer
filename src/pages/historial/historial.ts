import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//SERVICIOS
import { CrudProcesosProvider } from '../../providers/crud-procesos/crud-procesos';

@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {

		proceso:any = {};
		id_proceso:number;
    notiID:number;
    userID:number;



  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				private _cpp:CrudProcesosProvider) {

  	this.proceso = this.navParams.get("proceso");
    this.notiID = this.proceso.notiID;
    this.userID = this.proceso.userID;
    this.id_proceso = this.proceso.id;

    if (this.notiID) {
      this._cpp.obtenerHistorialUpdateNotificacion(this.id_proceso, this.notiID, this.userID);
    }else{

      this._cpp.obtenerHistorial(this.id_proceso);

    }
  	
  }



}
