import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//SERVICIOS
import { ProductosProvider } from '../../providers/productos/productos'

//PAGINAS
import { ProductoPage } from '../index.paginas';


@IonicPage()
@Component({
  selector: 'page-busqueda',
  templateUrl: 'busqueda.html',
})
export class BusquedaPage {

	productoPage = ProductoPage;

  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				private _ps:ProductosProvider) {
  }

  buscarproductos(ev:any){
  	let valor = ev.target.value;
  	console.log(valor);
  	this._ps.buscarProducto(valor);
  }

 

}
