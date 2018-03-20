var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, _ls, _cs, _up, _cpp) {
        this.navCtrl = navCtrl;
        this._ls = _ls;
        this._cs = _cs;
        this._up = _up;
        this._cpp = _cpp;
        this.productoPage = ProductoPage;
        this.perfilPage = PerfilPage;
        this.misProcesosPage = MisProcesosPage;
        this.verHistorial = HistorialPage;
        this.crearProceso = CrearProcesoPage;
        this.loginPage = LoginPage;
        this.registroUsuarioPage = RegistroUsuarioPage;
        this.id_usuario = parseInt(this._up.id_usuario);
        this.info = "misProcesos";
        if (this.id_usuario) {
            this.obtenerProcesos();
            this.obtenerNotificaciones();
        }
    }
    HomePage.prototype.buscarProceso = function (ev) {
        var valor = ev.target.value;
        this._cpp.buscarProceso(valor, this.id_usuario);
    };
    HomePage.prototype.obtenerProcesos = function () {
        this.id_usuario = parseInt(this._up.id_usuario);
        this._cpp.obtenerProcesos(this.id_usuario);
    };
    HomePage.prototype.obtenerNotificaciones = function () {
        this.id_usuario = parseInt(this._up.id_usuario);
        this._cpp.obtenerNotificaciones(this.id_usuario);
    };
    HomePage.prototype.goToRegistro = function () {
        this.navCtrl.push(this.registroUsuarioPage);
    };
    HomePage.prototype.goToInicio = function () {
        this.navCtrl.push(this.loginPage);
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController,
            LoadstoraProvider,
            CarritoProvider,
            UsuarioProvider,
            CrudProcesosProvider])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map