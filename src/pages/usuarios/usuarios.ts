import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//SERVICIOS
import { CrudUsuarioProvider } from '../../providers/crud-usuario/crud-usuario';

//PAGINAS
import { EditarUsuarioPage, CrearUsuarioPage } from '../index.paginas';

@Component({
  selector: 'page-usuarios',
  templateUrl: 'usuarios.html',
})
export class UsuariosPage {

	editarUsuario = EditarUsuarioPage;
	crearUsuario = CrearUsuarioPage;

  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				private _cup:CrudUsuarioProvider) {

  	this._cup.obtenerUsuarios();
  }

  buscarUsuarios(ev:any){
  	let valor = ev.target.value;
  	this._cup.buscaUsuario(valor);
  }


}
