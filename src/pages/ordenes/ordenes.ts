import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

//SERVICIOS
import { LoadstoraProvider } from '../../providers/loadstora/loadstora';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { CrudUsuarioProvider } from '../../providers/crud-usuario/crud-usuario';
import { CrudCiudadProvider } from '../../providers/crud-ciudad/crud-ciudad';
import { CrudPlanProvider } from '../../providers/crud-plan/crud-plan'




//PAGINAS
import { OrdenesDetallePage } from '../ordenes-detalle/ordenes-detalle';
import { ComprarPlanPage } from '../comprar-plan/comprar-plan';



@Component({
  selector: 'page-ordenes',
  templateUrl: 'ordenes.html',
})
export class OrdenesPage {

	ordenesDetalle = OrdenesDetallePage;
  comprarPlanPage = ComprarPlanPage;
  id_usuario:number;

  constructor(	public navCtrl: NavController, 
  				      public navParams: NavParams,
  				      private _ls:LoadstoraProvider,
                private _up:UsuarioProvider,
                private _cup:CrudUsuarioProvider,
                private loadingCtrl:LoadingController,
                private _ccp:CrudCiudadProvider,
                private _cpp:CrudPlanProvider) {

      let loader = this.loadingCtrl.create({
          content: "Cargando ...",
        });
        loader.present();

    this.id_usuario = parseInt(_up.id_usuario);
    this._cup.perfil(this.id_usuario);
    this._ccp.obtenerCiudades();
    this._cpp.obtenerPlanesActivos();

    loader.dismiss();

  }


}
