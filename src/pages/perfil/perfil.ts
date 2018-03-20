import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

//SERVICIOS
import { CrudUsuarioProvider } from '../../providers/crud-usuario/crud-usuario';
import { UsuarioProvider } from '../../providers/usuario/usuario';

//PAGINAS
import { EditarPerfilPage } from '../../pages/editar-perfil/editar-perfil';


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  editarPerfil = EditarPerfilPage;

	id_usuario:number;
	perfil:any[]=[];
	nombres:string;

  constructor(	public navCtrl: NavController, 
        				public navParams: NavParams,
        				private _cup:CrudUsuarioProvider,
        				private _up:UsuarioProvider,
                public loadingCtrl: LoadingController) {

    let loader = this.loadingCtrl.create({
          content: "Cargando ...",
        });
        loader.present();

  	this.id_usuario = parseInt(_up.id_usuario);
  	this._cup.perfil(this.id_usuario);

    loader.dismiss();

  }


}
