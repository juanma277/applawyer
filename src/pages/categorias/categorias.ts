import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//SERVICIOS
import { ProductosProvider } from '../../providers/productos/productos';

//PAGINAS
import { OporCategoriasPage } from '../index.paginas';



@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

	porCategorias = OporCategoriasPage;

  constructor(  public navCtrl: NavController, 
  				public navParams: NavParams,
  				private _ps:ProductosProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriasPage');
  }

}
