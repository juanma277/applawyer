import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ModalController } from 'ionic-angular';
import { URL_SERVICIOS_PRODUCCION } from "../../config/url.servicios";

//SERVICIOS
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { CrudCiudadProvider } from '../../providers/crud-ciudad/crud-ciudad';


//PAGINAS
import { EditarCiudadPage} from '../../pages/editar-ciudad/editar-ciudad';
import { LoginPage } from '../../pages/login/login';

@Injectable()
export class CiudadesProvider {

	

  constructor(	public http: HttpClient,
  				      private alertCtrl: AlertController,
                private modalCtrl:ModalController,
                private _us:UsuarioProvider,
                private _ccc: CrudCiudadProvider) {

    
  }

}
