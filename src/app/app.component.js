var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Platform } from 'ionic-angular';
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
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, _ajustes, _us, _pnp) {
        var _this = this;
        this._ajustes = _ajustes;
        this._us = _us;
        this._pnp = _pnp;
        this.rootPage = HomePage;
        //rootPage:any = "TabsPage";
        this.homePage = HomePage;
        this.loginPage = LoginPage;
        this.registroUsuarioPage = RegistroUsuarioPage;
        platform.ready().then(function () {
            _this.pagesUsuario = [
                { titulo: 'Mi Perfil', Component: PerfilPage, icon: 'contact' },
                { titulo: 'Mis Procesos', Component: MisProcesosPage, icon: 'briefcase' },
                { titulo: 'Informes', Component: InformesPage, icon: 'stats' },
            ];
            _this.pagesAdmin = [
                { titulo: 'Usuarios', Component: UsuariosPage, icon: 'people' },
                { titulo: 'Ciudades', Component: CiudadesPage, icon: 'globe' },
                { titulo: 'Juzgados', Component: JuzgadosPage, icon: 'book' },
                { titulo: 'Tipos Procesos', Component: TiposProcesosPage, icon: 'chatbubbles' },
                { titulo: 'Planes', Component: PlanesPage, icon: 'card' },
            ];
            _this.pagesAdminServices = [
                { titulo: 'Procesos', Component: ProcesosPage, icon: 'clipboard' },
                { titulo: 'Notificaciones', Component: NotificacionesPage, icon: 'notifications' },
            ];
            _this.pages = [
                { titulo: 'Iniciar Sesión', Component: HomePage, icon: 'power' },
                { titulo: 'Registrese', Component: LoginPage, icon: 'person-add' },
                { titulo: 'Categorias', Component: CategoriasPage, icon: 'locate' },
                { titulo: 'Ordenes', Component: OrdenesPage, icon: 'document' },
                { titulo: 'Buscar', Component: BusquedaPage, icon: 'search' },
            ];
            _this._ajustes.cargarStorage()
                .then(function () {
                if (_this._ajustes.ajustes.mostrar_tutorial) {
                    _this.rootPage = "IntroPage";
                }
                else {
                    _this.rootPage = HomePage;
                }
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                statusBar.styleDefault();
                splashScreen.hide();
                _this._pnp.init_notifications();
            });
        });
    }
    MyApp.prototype.goToPage = function (page) {
        this.nav.setRoot(page);
    };
    MyApp.prototype.goToHome = function () {
        this.nav.setRoot(this.homePage);
    };
    MyApp.prototype.goToRegistro = function () {
        this.nav.push(this.registroUsuarioPage);
    };
    MyApp.prototype.goToInicio = function () {
        this.nav.push(this.loginPage);
    };
    MyApp.prototype.cerrarSession = function () {
        var _this = this;
        this._us.cerrarSession().then(function () {
            _this.nav.setRoot(HomePage);
        });
    };
    __decorate([
        ViewChild('NAV'),
        __metadata("design:type", Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({
            templateUrl: 'app.html'
        }),
        __metadata("design:paramtypes", [Platform,
            StatusBar,
            SplashScreen,
            AjustesProvider,
            UsuarioProvider,
            PushnotificationProvider])
    ], MyApp);
    return MyApp;
}());
export { MyApp };
//# sourceMappingURL=app.component.js.map