import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//SERVICIOS
import { CrudUsuarioProvider } from '../../providers/crud-usuario/crud-usuario';

@Component({
  selector: 'page-registro-usuario',
  templateUrl: 'registro-usuario.html',
})
export class RegistroUsuarioPage {

	nombres:string;
	apellidos:string;
	tipo_identificacion:string;
	identificacion:string;
	telefono:string;
	email:string;
	direccion:string;

  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				private _cup:CrudUsuarioProvider) {

  	this.tipo_identificacion = 'CC';
  }


  crearUsuario(nombres:string, apellidos:string, tipo_identificacion:string, identificacion:string, telefono:string, email:string, direccion:string){
  		let rol = "STANDAR";
  		let estado = "INACTIVO";
  		let genero = "Masculino";
	  	this._cup.crearUsuario(nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero, rol, estado);

  } 

}
