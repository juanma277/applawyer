import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//SERVICIOS
import { LoadstoraProvider } from '../../providers/loadstora/loadstora';
import { CarritoProvider } from '../../providers/carrito/carrito';
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { CrudProcesosProvider } from '../../providers/crud-procesos/crud-procesos';

//PAGINAS
import { ProductoPage } from '../producto/producto';
import { PerfilPage } from '../perfil/perfil';
import { MisProcesosPage } from '../mis-procesos/mis-procesos';
import { HistorialPage } from '../../pages/historial/historial';
import { CrearProcesoPage } from '../../pages/crear-proceso/crear-proceso';
import { LoginPage } from '../../pages/login/login';
import { RegistroUsuarioPage } from '../../pages/registro-usuario/registro-usuario';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  productoPage = ProductoPage;
  perfilPage = PerfilPage;
  misProcesosPage = MisProcesosPage;
  verHistorial = HistorialPage;
  crearProceso = CrearProcesoPage;
  loginPage = LoginPage;
  registroUsuarioPage = RegistroUsuarioPage;
  id_usuario:number;
  info:any;


  constructor(public navCtrl: NavController,
              private _ls:LoadstoraProvider,
              private _cs:CarritoProvider, 
              private _up:UsuarioProvider,
              private _cpp:CrudProcesosProvider) {

    
    this.id_usuario = parseInt(this._up.id_usuario);
    this.info = "misProcesos";
      
      if(this.id_usuario)
      {
          this.obtenerProcesos();
          this.obtenerNotificaciones();
      }
    

  }

   
  buscarProceso(ev:any){
    let valor = ev.target.value;
    this._cpp.buscarProceso(valor, this.id_usuario);
  }

  obtenerProcesos(){
    this.id_usuario = parseInt(this._up.id_usuario);
    this._cpp.obtenerProcesos(this.id_usuario);
  }

  obtenerNotificaciones(){
    this.id_usuario = parseInt(this._up.id_usuario);
    this._cpp.obtenerNotificaciones(this.id_usuario);
  }

  goToRegistro(){
    this.navCtrl.push(this.registroUsuarioPage);
  }

  goToInicio(){
    this.navCtrl.push(this.loginPage);
  }

 
}
