import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//SERVICIOS
import { LoadstoraProvider } from '../../providers/loadstora/loadstora';

@Component({
  selector: 'page-ordenes-detalle',
  templateUrl: 'ordenes-detalle.html',
})
export class OrdenesDetallePage {

	orden:any={};

  constructor(	public navCtrl: NavController, 
        				public navParams: NavParams,
        				private _ls:LoadstoraProvider) {

  	this.orden = this.navParams.get("orden");
  }


  borrarOrden(orden_id:string){

  	this._ls.borrarOrden(orden_id)
  			.then(data_resp=>{
  				if(data_resp){

  				}else{
  					this.navCtrl.pop();
  				}

  			})



  }

  

}
