import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

//SERVICIOS
import { CrudProcesosProvider } from '../../providers/crud-procesos/crud-procesos';
import { CrudJuzgadoProvider } from '../../providers/crud-juzgado/crud-juzgado';
import { CrudCiudadProvider } from '../../providers/crud-ciudad/crud-ciudad';
import { CrudTipoProcesoProvider } from '../../providers/crud-tipo-proceso/crud-tipo-proceso';

@Component({
  selector: 'page-editar-proceso',
  templateUrl: 'editar-proceso.html',
})
export class EditarProcesoPage {

	proceso:any = {};
	id_proceso:number;
	estado:boolean;
	id_juzgado:number;
	id_tipo_proceso:number;
	id_ciudad:number;
	fecha:Date;
  demandante: string;
  demandado: string;
  user_id:number;

  constructor(	public navCtrl: NavController, 
				public navParams: NavParams,
				private _cjp: CrudJuzgadoProvider,
				private _ccp: CrudCiudadProvider,
				private _ctp: CrudTipoProcesoProvider,
				private _cpp: CrudProcesosProvider,
        private loadingCtrl: LoadingController) {

      let loader = this.loadingCtrl.create({
        content: "Please wait...",
      });

      loader.present();

      	this._ccp.ciudadActivas();
      	this._ctp.tipoProcesoActivo();
      	this.proceso = this.navParams.get("proceso");
      	this.id_proceso = this.proceso.proceso_id;
      	this.id_ciudad = this.proceso.ciudad_id;
      	this.id_tipo_proceso = this.proceso.tipo_proceso_id;
        this.user_id = this.proceso.user_id;
        this._cjp.obtenerJuzgadosActivos(this.id_ciudad);
        this.demandado = this.proceso.demandado;
        this.demandante = this.proceso.demandante;
      	this.fecha = this.proceso.fechaRadicado;
        this.id_juzgado = this.proceso.juzgado_id;

        if(this.proceso.estadoProceso === 'INACTIVO'){
          this.estado = false;
        }else{
          this.estado = true;
        }

      loader.dismiss();
 	
  }

  onSelectChange(selectedValue: any) {

     let loader = this.loadingCtrl.create({
        content: "Please wait...",
      });

      loader.present();

    this._cjp.obtenerJuzgadosActivos(selectedValue);

          loader.dismiss();    
    
  }


  actualizarProceso(id_tipo_proceso, id_ciudad, id_juzgado, radicado, demandante, demandado, fecha, estado, id_proceso){

    let nuevoEstado:string;
    if(estado){
      nuevoEstado = 'ACTIVO'
    }else{
      nuevoEstado = 'INACTIVO'
    }

      this._cpp.editarProceso(id_tipo_proceso, id_ciudad, id_juzgado, radicado, demandante, demandado, fecha, nuevoEstado, id_proceso, this.user_id);

  }



}
