import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//IMPORTAR PAGINAS
import { HomePage } from '../pages/home/home';
import { CategoriasPage } from '../pages/categorias/categorias';
import { OrdenesPage } from '../pages/ordenes/ordenes';
import { BusquedaPage } from '../pages/busqueda/busqueda';
import { CiudadesPage } from '../pages/ciudades/ciudades';
import { InformesPage } from '../pages/informes/informes';
import { JuzgadosPage } from '../pages/juzgados/juzgados';
import { MisProcesosPage } from '../pages/mis-procesos/mis-procesos';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
import { PerfilPage } from '../pages/perfil/perfil';
import { PlanesPage } from '../pages/planes/planes';
import { ProcesosPage } from '../pages/procesos/procesos';
import { TiposProcesosPage } from '../pages/tipos-procesos/tipos-procesos';
import { UsuariosPage } from '../pages/usuarios/usuarios';
import { LoginPage } from '../pages/login/login';
import { RegistroUsuarioPage } from '../pages/registro-usuario/registro-usuario';





//IMPORTAR SERVICIOS
import { AjustesProvider } from '../providers/ajustes/ajustes';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { PushnotificationProvider } from '../providers/pushnotification/pushnotification';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('NAV') nav:any;

  pages: Array<{titulo:string, Component:any, icon:string}>;
  pagesUsuario: Array<{titulo:string, Component:any, icon:string}>;
  pagesAdmin: Array<{titulo:string, Component:any, icon:string}>;
  pagesAdminServices: Array<{titulo:string, Component:any, icon:string}>;


  rootPage:any = HomePage;
  //rootPage:any = "TabsPage";
  homePage = HomePage;
  loginPage = LoginPage;
  registroUsuarioPage = RegistroUsuarioPage;

  constructor(  platform: Platform, 
                statusBar: StatusBar, 
                splashScreen: SplashScreen,
                private _ajustes:AjustesProvider,
                private _us:UsuarioProvider,
                private _pnp:PushnotificationProvider) {

    platform.ready().then(() => {

      this.pagesUsuario = [
        {titulo:'Mi Perfil', Component: PerfilPage, icon:'contact'},
        {titulo:'Mis Procesos', Component: MisProcesosPage, icon:'briefcase'},
        {titulo:'Informes', Component: InformesPage, icon:'stats'},
        {titulo:'Facturación', Component: OrdenesPage, icon:'cash'},

      ];

      this.pagesAdmin = [
        {titulo:'Usuarios', Component: UsuariosPage, icon:'people'},
        {titulo:'Ciudades', Component: CiudadesPage, icon:'globe'},
        {titulo:'Juzgados', Component: JuzgadosPage, icon:'book'},
        {titulo:'Tipos Procesos', Component: TiposProcesosPage, icon:'chatbubbles'},
        {titulo:'Planes', Component: PlanesPage, icon:'card'},
      ];

      this.pagesAdminServices = [
        {titulo:'Procesos', Component: ProcesosPage, icon:'clipboard'},
        {titulo:'Notificaciones', Component: NotificacionesPage, icon:'notifications'},
      ];

      this.pages = [
        {titulo:'Iniciar Sesión', Component: HomePage, icon:'power'},
        {titulo:'Registrese', Component: LoginPage, icon:'person-add'},
        {titulo:'Categorias', Component: CategoriasPage, icon:'locate'},
        {titulo:'Ordenes', Component: OrdenesPage, icon:'document'},
        {titulo:'Buscar', Component: BusquedaPage, icon:'search'},
      ];

      this._ajustes.cargarStorage()
                   .then(()=>{

                      if(this._ajustes.ajustes.mostrar_tutorial){
                          this.rootPage = "IntroPage";
                        }else{
                          this.rootPage = HomePage;
                        }

                        // Okay, so the platform is ready and our plugins are available.
                        // Here you can do any higher level native things you might need.
                        statusBar.styleDefault();
                        splashScreen.hide();
                        this._pnp.init_notifications();

                   })   

     
    });
  }

  goToPage(page){
    this.nav.setRoot(page);
  }

  goToHome(){
   this.nav.setRoot(this.homePage); 
  }

  goToRegistro(){
    this.nav.push(this.registroUsuarioPage);
  }

  goToInicio(){
    this.nav.push(this.loginPage);
  }

  cerrarSession(){

    this._us.cerrarSession().then(()=>{
        
            this.nav.setRoot(HomePage);

        })

  }
}

