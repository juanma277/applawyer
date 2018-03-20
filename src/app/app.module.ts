import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Pagina2Page } from "../pages/pagina2/pagina2";

//PIPES
import { ImagenPipe } from '../pipes/imagen';
import { ImagenPlanPipe } from '../pipes/imagen-plan/imagen-plan';

//PLUGINS - STORAGE
import { IonicStorageModule } from '@ionic/storage';

//PLUGINS CAMARA E IMAGENES
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';

//PLUGINS ONESIGNAL - NOTIFICACIONES PUSH
import { OneSignal } from '@ionic-native/onesignal';

//PLUGINS IMAGENES CHART.JS
import { ChartsModule } from 'ng2-charts';

//PLUGINS ROTACION DE PANTALLA
import { ScreenOrientation } from '@ionic-native/screen-orientation';

//PLUGINS UNIQUE DEVICE ID
import { UniqueDeviceID } from '@ionic-native/unique-device-id';

//SERVICIOS
import { AjustesProvider } from '../providers/ajustes/ajustes';
import { CarritoProvider } from '../providers/carrito/carrito';
import { ProductosProvider } from '../providers/productos/productos';
import { UsuarioProvider } from '../providers/usuario/usuario';
import { LoadstoraProvider } from '../providers/loadstora/loadstora';
import { CiudadesProvider } from '../providers/ciudades/ciudades';
import { JuzgadosProvider } from '../providers/juzgados/juzgados';
import { TiposProcesosProvider } from '../providers/tipos-procesos/tipos-procesos';
import { PlanesProvider } from '../providers/planes/planes';
import { ProcesosProvider } from '../providers/procesos/procesos';
import { NotificacionesProvider } from '../providers/notificaciones/notificaciones';
import { CrudCiudadProvider } from '../providers/crud-ciudad/crud-ciudad';
import { CrudJuzgadoProvider } from '../providers/crud-juzgado/crud-juzgado';
import { CrudTipoProcesoProvider } from '../providers/crud-tipo-proceso/crud-tipo-proceso';
import { CrudPlanProvider } from '../providers/crud-plan/crud-plan';
import { PushnotificationProvider } from '../providers/pushnotification/pushnotification';
import { CrudUsuarioProvider } from '../providers/crud-usuario/crud-usuario';
import { CrudProcesosProvider } from '../providers/crud-procesos/crud-procesos';


//PAGINAS
import { BusquedaPage, CarritoPage, CategoriasPage, LoginPage, OrdenesPage, OrdenesDetallePage, OporCategoriasPage, TabsPage, ProductoPage, CiudadesPage, InformesPage, JuzgadosPage, MisProcesosPage, NotificacionesPage, PerfilPage, PlanesPage, ProcesosPage, TiposProcesosPage, UsuariosPage, EditarCiudadPage, CrearCiudadPage, EditarJuzgadoPage, CrearJuzgadoPage, EditarTipoProcesoPage, CrearTipoProcesoPage, CrearPlanPage, EditarPlanPage, CrearUsuarioPage, EditarUsuarioPage, EditarPerfilPage, HistorialPage, CrearProcesoPage, EditarProcesoPage, ConfiguracionesPage, ViewProcesoPage, RegistroUsuarioPage, ReporEstadoPage, ReporJuzgadoPage, ReporTipoPage, ViewNotificacionPage, ReporCiudadPage, ComprarPlanPage} from '../pages/index.paginas';





@NgModule({
  declarations: [
    MyApp,
    ImagenPipe,
    ImagenPlanPipe,
    HomePage,
    Pagina2Page,
    BusquedaPage,
    CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesPage,
    OrdenesDetallePage,
    OporCategoriasPage,
    TabsPage,
    ProductoPage,
    CiudadesPage, 
    InformesPage, 
    JuzgadosPage, 
    MisProcesosPage, 
    NotificacionesPage, 
    PerfilPage, 
    PlanesPage, 
    ProcesosPage, 
    TiposProcesosPage, 
    UsuariosPage,
    EditarCiudadPage,
    CrearCiudadPage,
    EditarJuzgadoPage,
    CrearJuzgadoPage,
    EditarTipoProcesoPage,
    CrearTipoProcesoPage,
    CrearPlanPage,
    EditarPlanPage,
    CrearUsuarioPage,
    EditarUsuarioPage,
    EditarPerfilPage,
    HistorialPage,
    CrearProcesoPage,
    EditarProcesoPage,
    ConfiguracionesPage,
    ViewProcesoPage,
    RegistroUsuarioPage,
    ReporEstadoPage, 
    ReporJuzgadoPage, 
    ReporTipoPage,
    ViewNotificacionPage,
    ReporCiudadPage,
    ComprarPlanPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Pagina2Page,
    BusquedaPage,
    CarritoPage,
    CategoriasPage,
    LoginPage,
    OrdenesPage,
    OrdenesDetallePage,
    OporCategoriasPage,
    TabsPage,
    ProductoPage,
    CiudadesPage, 
    InformesPage, 
    JuzgadosPage, 
    MisProcesosPage, 
    NotificacionesPage, 
    PerfilPage, 
    PlanesPage, 
    ProcesosPage, 
    TiposProcesosPage, 
    UsuariosPage,
    EditarCiudadPage,
    CrearCiudadPage,
    EditarJuzgadoPage,
    CrearJuzgadoPage,
    CrearTipoProcesoPage,
    EditarTipoProcesoPage,
    CrearPlanPage,
    EditarPlanPage,
    CrearUsuarioPage,
    EditarUsuarioPage,
    EditarPerfilPage,
    HistorialPage,
    CrearProcesoPage,
    EditarProcesoPage,
    ConfiguracionesPage,
    ViewProcesoPage,
    RegistroUsuarioPage,
    ReporEstadoPage, 
    ReporJuzgadoPage, 
    ReporTipoPage,
    ViewNotificacionPage,
    ReporCiudadPage,
    ComprarPlanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AjustesProvider,
    CarritoProvider,
    ProductosProvider,
    UsuarioProvider,
    CarritoProvider,
    LoadstoraProvider,
    CiudadesProvider,
    JuzgadosProvider,
    TiposProcesosProvider,
    PlanesProvider,
    ProcesosProvider,
    NotificacionesProvider,
    CrudCiudadProvider,
    CrudJuzgadoProvider,
    CrudTipoProcesoProvider,
    CrudPlanProvider,
    Camera,
    ImagePicker,
    CrudUsuarioProvider,
    ProcesosProvider,
    CrudProcesosProvider,
    OneSignal,
    PushnotificationProvider,
    UniqueDeviceID,
    ScreenOrientation
  ]
})
export class AppModule {}
