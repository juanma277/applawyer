import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

//SERVICIO JUZGADOS -PROCESOS -USUARIO
import { UsuarioProvider } from '../../providers/usuario/usuario';

//PAGINAS
import { ReporEstadoPage } from '../../pages/repor-estado/repor-estado';
import { ReporJuzgadoPage } from '../../pages/repor-juzgado/repor-juzgado';
import { ReporTipoPage } from '../../pages/repor-tipo/repor-tipo';
import { ReporCiudadPage } from '../../pages/repor-ciudad/repor-ciudad';



@Component({
  selector: 'page-informes',
  templateUrl: 'informes.html',
})
export class InformesPage {


    reporEstadoPage = ReporEstadoPage;
    reporJuzgadoPage = ReporJuzgadoPage;
    reporTipoPage = ReporTipoPage;
    reporCiudadPage = ReporCiudadPage;


 
    constructor(public navCtrl: NavController,
    			private _up:UsuarioProvider) {

    		}
}
 
 