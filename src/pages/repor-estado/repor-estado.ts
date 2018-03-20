import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController, Platform } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

//SERVICIO JUZGADOS -PROCESOS -USUARIO
import { CrudJuzgadoProvider } from '../../providers/crud-juzgado/crud-juzgado';
import { CrudProcesosProvider } from '../../providers/crud-procesos/crud-procesos';
import { CrudTipoProcesoProvider } from '../../providers/crud-tipo-proceso/crud-tipo-proceso';
import { UsuarioProvider } from '../../providers/usuario/usuario';

//SERVICIO CHART GRAFICAS
import { Chart } from 'chart.js';

@Component({
  selector: 'page-repor-estado',
  templateUrl: 'repor-estado.html',
})
export class ReporEstadoPage {

	@ViewChild('barCanvas') barCanvas;

	barChart: any;
	data:any[] = [];
	cantidadProcesos = [];
    procesosPorEstado = [];
    id:number;

  constructor(public navCtrl: NavController, 
  				public navParams: NavParams,
    			private _cpp:CrudProcesosProvider,
    			private loadingCtrl:LoadingController) {

  	this.id = this.navParams.get("id");

  	let loader = this.loadingCtrl.create({
		      content: "Por favor espere...",
		    });
		    loader.present();


    	this._cpp.procesosEstado(this.id).then(res=>{
    		this.data = this._cpp.procesosPorEstado;

    		for( let lista of this.data){
    			this.cantidadProcesos.push(lista['cantidad']);
    			this.procesosPorEstado.push(lista['estado']);
    		}


    	});

    	loader.dismiss();

  }


  ///////////////////////////////////////////////

  public barChartOptions:any = {
    scaleShowVerticalLines: true,
    responsive: true
  };

  //Chart Labels
  public barChartLabels:string[] = ['ACTIVOS', 'INACTIVOS'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  //Chart data
  public barChartData:any[] = [
    {data: this.cantidadProcesos, label: 'Procesos'},
  ];
 
  // Chart events
  public chartClicked(e:any):void {
    console.log(e);
  }

  // Chart events
  public chartHovered(e:any):void {
    console.log(e);
  }

  public chartColors: any[] = [
      { 
        backgroundColor:["#9EFE0A", "#DA0F05" ] 
      }];

  //////////////////////////////////////////////

}
