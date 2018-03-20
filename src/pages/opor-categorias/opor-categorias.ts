import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//SERVICIOS
import { ProductosProvider } from '../../providers/productos/productos';
import { ProductoPage } from '../producto/producto';


@Component({
  selector: 'page-opor-categorias',
  templateUrl: 'opor-categorias.html',
})
export class OporCategoriasPage {

	categoria:any = {};
	productoPage = ProductoPage;

  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				private _ps:ProductosProvider) {

  	this.categoria = this.navParams.get("categoria");

  	this._ps.cargarPorCategoria(this.categoria.id);


  }

}
