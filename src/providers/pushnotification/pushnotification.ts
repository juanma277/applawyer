import { Injectable, ViewChild } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform, AlertController, ModalController, NavController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

//URL DEL SERVICIO
import { URL_SERVICIOS_PRODUCCION } from '../../config/url.servicios';

//SERVICIOS
import { CrudProcesosProvider } from '../../providers/crud-procesos/crud-procesos';

//PAGINAS
import { ViewProcesoPage } from '../../pages/view-proceso/view-proceso';
import { HistorialPage } from '../../pages/historial/historial';
import { ViewNotificacionPage } from '../../pages/view-notificacion/view-notificacion';



@Injectable()
export class PushnotificationProvider {
	//@ViewChild('NAV') nav:any;
	//@ViewChild('myNav') nav: NavController;
	//@ViewChild(Nav) nav: Nav;
	@ViewChild('NAV') nav:NavController;

	player_id:string;
	id_usuario:string;
	historial:any = {};
	id_proceso: string;
	datosProceso:any = {};
	demandante:string;
	demandado:string;
	radicado:string;
	actuacion:string;
	anotacion:string;
	despacho:string;
	tipoProceso:string;
	TipoNotificacion:string;

	viewProcesoPage = ViewProcesoPage;
	viewNotificacionPage = ViewNotificacionPage;

  constructor(private oneSignal: OneSignal,
  			  private platform:Platform,
  			  private alertCtrl:AlertController,
  			  public http: HttpClient,
  			  private modalCtrl:ModalController,
  			  private _cpp:CrudProcesosProvider ) {
  }

  init_notifications(){

  	if (this.platform.is('cordova')) {
  		// code...
  		this.oneSignal.startInit('156748b6-481c-4fce-88b8-962863d67b8d', '111682406275');

		this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

		
		this.oneSignal.handleNotificationReceived().subscribe(() => {
		 // do something when notification is received
		 //EVENTO CUANDO LA NOTIFICACIÓN ES RECIBIDA
			 this.oneSignal.enableVibrate(true);
			 //this.nav.push(ViewProcesoPage);
			

		});

		this.oneSignal.handleNotificationOpened().subscribe((data) => {
		  //EVENTO CUANDO LA NOTIFICACIÓN ES ABIERTA
		  	let payload = data;
		  	this.TipoNotificacion = data.notification.payload.additionalData.TipoNotificacion;

		  	switch (this.TipoNotificacion) {
		  		case "1":
		  			
		  			this.id_proceso = data.notification.payload.additionalData.ID;
				  	this.demandante = data.notification.payload.additionalData.Demandante;
				  	this.demandado = data.notification.payload.additionalData.Demandado;
				  	this.radicado = data.notification.payload.additionalData.Radicado;
				  	this.actuacion = data.notification.payload.additionalData.Actuacion;
				  	this.anotacion = data.notification.payload.additionalData.Anotacion;
				  	this.despacho = data.notification.payload.additionalData.juzgado;
				  	this.tipoProceso = data.notification.payload.additionalData.tipoProceso;

				  	let modalActuacion:any;
					modalActuacion = this.modalCtrl.create(ViewProcesoPage,{actuacion: this.actuacion, anotacion:this.anotacion, radicado:this.radicado, demandante: this.demandante, demandado:this.demandado});
					modalActuacion.present();

		  			break;

		  		case "2":
		  			
		  			this.radicado = data.notification.payload.additionalData.Radicado;

		  			let modalAprobado:any;
					modalAprobado = this.modalCtrl.create(ViewNotificacionPage,{radicado:this.radicado, mensaje:'El proceso fue revisado y aprobado para consulta, cuando tenga algún tipo de cambio será notificado a través de los datos ingresados. '});
					modalAprobado.present();

		  			break;

		  		case "3":
		  			
		  			this.radicado = data.notification.payload.additionalData.Radicado;

		  			let modalNoAprobado:any;
					modalNoAprobado = this.modalCtrl.create(ViewNotificacionPage,{radicado:this.radicado, mensaje:'El proceso fue revisado y No aprobado para consulta, por favor revisa e ingresa nuevamente los datos del proceso.'});
					modalNoAprobado.present();

		  			break;
		  		
		  		default:
		  			// code...
		  			break;
		  	}
		  			  
		});

		this.oneSignal.endInit();

		
  	}else{
  		console.log('INICIANDO ONE SIGNAL:');
  	}

  	

  }

  redirectToPage(data) { 
    let type
    try {
      type = data.notification.payload.additionalData.type;
    } catch (e) {
      console.warn(e);
    }

    let modal:any;
		  	modal = this.modalCtrl.create(ViewProcesoPage, { ID: data.notification.payload.additionalData.ID});
		  	modal.present();


  }

  obtenerPlayerID(){

  	if (this.platform.is('cordova')) {

  	this.oneSignal.getIds().then((id) => {
		      this.player_id = id.userId;
		    });
  }else{
  	console.log('PLAYERID REGISTRADO EN CHROME: ' + this.player_id);
  }

  }


   

}
