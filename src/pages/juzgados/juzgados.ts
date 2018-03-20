import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//SERVICIOS
import { CrudJuzgadoProvider } from '../../providers/crud-juzgado/crud-juzgado';

//PAGINAS
import { EditarJuzgadoPage, CrearJuzgadoPage } from '../index.paginas';

@Component({
  selector: 'page-juzgados',
  templateUrl: 'juzgados.html',
})
export class JuzgadosPage {


	editarJuzgado = EditarJuzgadoPage;
	crearJuzgado = CrearJuzgadoPage;

  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				private _cjp:CrudJuzgadoProvider) {

  	this._cjp.obtenerJuzgados();
  }


  buscarJuzgados(ev:any){

    let valor = ev.target.value;
    this._cjp.buscarJuzgado(valor);
  	
  }

}
