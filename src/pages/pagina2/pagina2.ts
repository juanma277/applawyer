import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  constructor(public navCtrl: NavController, 
  			  public navParams: NavParams,) {
  }

  pagina3(){
  	this.navCtrl.push("mi-pagina3");
  }


}
