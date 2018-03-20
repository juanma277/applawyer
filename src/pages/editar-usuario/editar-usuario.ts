import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

//SERVICIOS
import { CrudUsuarioProvider } from '../../providers/crud-usuario/crud-usuario';


@Component({
  selector: 'page-editar-usuario',
  templateUrl: 'editar-usuario.html',
})
export class EditarUsuarioPage {

	user:any = {};
	id_user:number;
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
            		private viewCtrl:ViewController,
            		private _cup:CrudUsuarioProvider,
            		private alertCtrl: AlertController) {

  	this.user = this.navParams.get("user");

  	this.tipo_identificacion = this.user.tipoIdentificacion;
  	this.genero = this.user.genero;
  	this.rol = this.user.rol;

  	if(this.user.estado === 'INACTIVO'){
  		this.estado = false;
  	}else{
  		this.estado = true;
  	}


  }

  resetPassword(){

  	let confirm = this.alertCtrl.create({
      title: 'Advertencia',
      message: '¿Estas seguro que quieres resetear la contraseña del usuario?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            //EVENTO CUANDO PRESIONA CANCELAR
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            this._cup.resetPassword(this.id_user, this.identificacion);
          }
        }
      ]
    });
    confirm.present();
  }

  actualizarUsuario(id_user:number, nombres:string, apellidos:string, tipo_identificacion:string, identificacion:string, telefono:string, email:string, direccion:string, genero:string, rol:string, estado:string){

  	let nuevoEstado:string;
  	if(estado){
  		nuevoEstado = 'ACTIVO'
  	}else{
  		nuevoEstado = 'INACTIVO'
  	}

  	this._cup.actualizarUsuario(id_user, nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero, rol, nuevoEstado);

  }



}
