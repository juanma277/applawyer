import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//SERVICIOS
import { CrudJuzgadoProvider } from '../../providers/crud-juzgado/crud-juzgado';
import { CrudCiudadProvider  } from '../../providers/crud-ciudad/crud-ciudad';
import { CrudTipoProcesoProvider } from '../../providers/crud-tipo-proceso/crud-tipo-proceso';
import { CrudProcesosProvider } from '../../providers/crud-procesos/crud-procesos';
import { UsuarioProvider } from '../../providers/usuario/usuario';


@Component({
  selector: 'page-crear-proceso',
  templateUrl: 'crear-proceso.html',
})
export class CrearProcesoPage {

	ciudad:number;
	tipoProceso:number;
  juzgado:number;
  radicado:string;
  demandante:string;
  demandado:string;
  fecha:string;
  estado:boolean;
  user_id:number;



  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				private _cjp:CrudJuzgadoProvider,
        		private _ccp:CrudCiudadProvider,
        		private _ctp:CrudTipoProcesoProvider,
            private _cpp:CrudProcesosProvider,
            private _up:UsuarioProvider) {

  	this._ccp.ciudadActivas();
  	this._ctp.tipoProcesoActivo();
    this.user_id = parseInt(this._up.id_usuario);


  }

	onSelectChange(selectedValue: any) {

    this._cjp.obtenerJuzgadosActivos(selectedValue);
    
  }

crearProceso(tipoProceso:number, ciudad:number, juzgado:number, radicado:string, demandante:string, demandado:string, fecha:string, estado:boolean){
    
    let nuevoEstado:string;
    if(estado){
      nuevoEstado = 'ACTIVO'
    }else{
      nuevoEstado = 'INACTIVO'
    }


    this._cpp.crearProceso(this.user_id, tipoProceso, ciudad, juzgado, radicado, demandante, demandado, fecha, nuevoEstado);

  }

}
