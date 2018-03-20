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
import { CrudTipoProcesoProvider } from '../../providers/crud-tipo-proceso/crud-tipo-proceso';
var CrearTipoProcesoPage = /** @class */ (function () {
    function CrearTipoProcesoPage(navCtrl, navParams, _ctpp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ctpp = _ctpp;
    }
    CrearTipoProcesoPage.prototype.crearTipo = function (tipo, estado) {
        var nuevoEstado;
        if (estado) {
            nuevoEstado = 'ACTIVO';
        }
        else {
            nuevoEstado = 'INACTIVO';
        }
        this._ctpp.crearTipo(tipo, nuevoEstado);
    };
    CrearTipoProcesoPage = __decorate([
        Component({
            selector: 'page-crear-tipo-proceso',
            templateUrl: 'crear-tipo-proceso.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CrudTipoProcesoProvider])
    ], CrearTipoProcesoPage);
    return CrearTipoProcesoPage;
}());
export { CrearTipoProcesoPage };
//# sourceMappingURL=crear-tipo-proceso.js.map