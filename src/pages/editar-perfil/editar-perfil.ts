import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

//CAMARA Y SELECCION DE FOTOS
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';

//SERVICIOS
import { CrudUsuarioProvider } from '../../providers/crud-usuario/crud-usuario';

@Component({
  selector: 'page-editar-perfil',
  templateUrl: 'editar-perfil.html',
})
export class EditarPerfilPage {

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
	activarPass:boolean;
	pass1:string;
	pass2:string;
	imagenPreView:string;
	imagenPrevia:string;


  constructor(	public navCtrl: NavController, 
  				public navParams: NavParams,
        		private _cup:CrudUsuarioProvider,
        		private alertCtrl: AlertController,
        		private camera:Camera,
        		private imagePicker: ImagePicker) {

  	this.user = this.navParams.get("user");
  	this.tipo_identificacion = this.user.tipoIdentificacion;
  	this.genero = this.user.genero;
  	this.activarPass = false;


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

  actualizarPerfil(id_user:number, nombres:string, apellidos:string, tipo_identificacion:string, identificacion:string, telefono:string, email:string, direccion:string, genero:string, pass1:string, pass2:string){

  	if(this.activarPass)
  	{
  		if(pass1 == pass2)
  		{
  			if (this.imagenPreView != null) 
  			{
  				this._cup.actualizarPerfilPassImage(id_user, nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero, pass1, this.imagenPreView);	
  			}else
  				{
   	 				this._cup.actualizarPerfilPass(id_user, nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero, pass1);
   	 			}
   	 	}else
   	 		{
   	 		this.alertCtrl.create({
                  title:'Error!',
                  subTitle:'Las contraseñas no coinciden',
                  buttons:["Aceptar"]
                }).present();
   	 		}
   		
   	 }else
   	 	{
   	 		if (this.imagenPreView != null) 
   	 		{
   	 			this._cup.actualizarPerfilImage(id_user, nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero, this.imagenPreView);
   	 		}else
   	 			{
   	 				this._cup.actualizarPerfil(id_user, nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero);
   	 			}
			   	 	
   	 	}
   }

   mostrarCamara(){

  	const options: CameraOptions = {
		  quality: 100,
		  destinationType: this.camera.DestinationType.DATA_URL,
		  encodingType: this.camera.EncodingType.JPEG,
		  mediaType: this.camera.MediaType.PICTURE
		}

		this.camera.getPicture(options).then((imageData) => {
		 // imageData is either a base64 encoded string or a file URI
		 // If it's base64:
		 this.imagenPreView = 'data:image/jpeg;base64,' + imageData;
		 this.imagenPrevia = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
		 // Handle error
		 	this.alertCtrl.create({
                title:'Error!',
                subTitle:err,
                buttons:["Aceptar"]
              }).present();
		});

  }

  seleccionarFoto(){

  	let opciones: ImagePickerOptions = {

  		quality:70,
  		outputType:1,
  		maximumImagesCount:1

  	}

  	this.imagePicker.getPictures(opciones).then((results) => {
	  for (var i = 0; i < results.length; i++) {
	      
	      this.imagenPreView = 'data:image/jpeg;base64,' + results[i];
	      this.imagenPrevia = 'data:image/jpeg;base64,' + results[i];

	  }
	}, (err) => { 


		this.alertCtrl.create({
                title:'Error!',
                subTitle:err,
                buttons:["Aceptar"]
              }).present();



	});

  }


}
