import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';


//SERVICIOS
import { UsuarioProvider } from '../../providers/usuario/usuario';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

	identificacion:string = "";
	contrasena:string= "";

  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
  				private viewCtrl:ViewController,
  				private _us:UsuarioProvider) {
  }

  ingresar(){

  	this._us.ingresar(this.identificacion, this.contrasena).then(()=>{
        
        if( this._us.activo){

           this.viewCtrl.dismiss(true);

        }
        
    });

  }

}
