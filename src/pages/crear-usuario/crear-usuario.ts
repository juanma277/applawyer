import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

//SERVICIOS
import { CrudUsuarioProvider } from '../../providers/crud-usuario/crud-usuario';

@Component({
  selector: 'page-crear-usuario',
  templateUrl: 'crear-usuario.html',
})
export class CrearUsuarioPage {

	nombres:string;
	apellidos:string;
	tipo_identificacion:string;
	identificacion:string;
	telefono:string;
	email:string;
	direccion:string;
	genero:string;
	estado:boolean;
	rol:string;

  constructor(	public navCtrl: NavController,
  				public navParams: NavParams,
  				private _cup:CrudUsuarioProvider) {

  	this.tipo_identificacion = 'CC';
  	this.genero = 'Masculino';
  	this.rol = 'STANDAR';
  }

   crearUsuario(nombres:string, apellidos:string, tipo_identificacion:string, identificacion:string, telefono:string, email:string, direccion:string, genero:string, rol:string, estado:string){

	  	let nuevoEstado:string;
	  	if(estado){
	  		nuevoEstado = 'ACTIVO'
	  	}else{
	  		nuevoEstado = 'INACTIVO'
	  	}

	  	this._cup.crearUsuario(nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero, rol, nuevoEstado);

  } 


}
