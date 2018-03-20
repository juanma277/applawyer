import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Platform } from "ionic-angular";


@Injectable()
export class AjustesProvider {

	ajustes ={
		mostrar_tutorial: true
	}

  constructor( private platform: Platform,
  			       private storage:Storage ) {
  }

  cargarStorage(){

  	let promesa = new Promise((resolve, reject)=>{

  		if(this.platform.is("cordova")){
  		//DISPOSITIVO
  		console.log("INICIANDO STORAGE");
  			this.storage.ready().then(()=>{
  				console.log("STORAGE OK");
  				this.storage.get("ajustes")
  					.then(ajustes=>{

  						if (ajustes) {
  							this.ajustes = ajustes;
  						}
  						
  						resolve();
  					});
  			})


  		}else{
  		//ESCRITORIO
  			if(localStorage.getItem("ajustes")){
  			this.ajustes = JSON.parse(localStorage.getItem("ajustes"));
  		}
  			resolve();
  		}

  	});

  	return promesa;

  	

  }

  guardarStorage(){

  	if(this.platform.is("cordova")){
  		//DISPOSITIVO
  		this.storage.ready()
  					.then(()=>{
  						this.storage.set("ajustes",this.ajustes);
  					})
  	}else{
  		//ESCRITORIO
  		localStorage.setItem("ajustes", JSON.stringify(this.ajustes));
  	}
  }

}
