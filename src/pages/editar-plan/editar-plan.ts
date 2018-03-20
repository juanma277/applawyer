import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';

//SERVICIOS
import { CrudPlanProvider } from '../../providers/crud-plan/crud-plan';

@Component({
  selector: 'page-editar-plan',
  templateUrl: 'editar-plan.html',
})
export class EditarPlanPage {

	plan:any = {};
	nomPlan:string;
	valor:number;
	cantidad:number;
	imagen:string;
	estado:boolean;
	imagenPreView:string;
	imagenPrevia:string;
	id_plan:number;

  constructor(	public navCtrl: NavController, 
  				      public navParams: NavParams,
  				      private imagePicker: ImagePicker,
        		    private alertCtrl:AlertController,
        		    private camera:Camera,
  				      private _cpp:CrudPlanProvider) {

  	this.plan = this.navParams.get("plan");

  	this.imagenPreView = "/users/"+ this.plan.image;

  	if(this.plan.estado === 'INACTIVO'){
  		this.estado = false;
  	}else{
  		this.estado = true;
  	}

  }

  actualizarPlan(nomPlan:string, valor:number, cantidad:number, estado:boolean, id_plan:number){

  	let nuevoEstado:string;
  	if(estado){
  		nuevoEstado = 'ACTIVO'
  	}else{
  		nuevoEstado = 'INACTIVO'
  	}

  	this._cpp.actualizarPlan(nomPlan, valor, cantidad, this.imagenPreView, nuevoEstado, id_plan );

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
