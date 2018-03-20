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
import { NavController, NavParams } from 'ionic-angular';
//SERVICIOS
import { CrudUsuarioProvider } from '../../providers/crud-usuario/crud-usuario';
var RegistroUsuarioPage = /** @class */ (function () {
    function RegistroUsuarioPage(navCtrl, navParams, _cup) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cup = _cup;
        this.tipo_identificacion = 'CC';
    }
    RegistroUsuarioPage.prototype.crearUsuario = function (nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion) {
        var rol = "STANDAR";
        var estado = "INACTIVO";
        var genero = "Masculino";
        this._cup.crearUsuario(nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero, rol, estado);
    };
    RegistroUsuarioPage = __decorate([
        Component({
            selector: 'page-registro-usuario',
            templateUrl: 'registro-usuario.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CrudUsuarioProvider])
    ], RegistroUsuarioPage);
    return RegistroUsuarioPage;
}());
export { RegistroUsuarioPage };
//# sourceMappingURL=registro-usuario.js.map