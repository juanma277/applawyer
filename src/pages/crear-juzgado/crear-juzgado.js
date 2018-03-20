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
import { CrudJuzgadoProvider } from '../../providers/crud-juzgado/crud-juzgado';
import { CrudCiudadProvider } from '../../providers/crud-ciudad/crud-ciudad';
var CrearJuzgadoPage = /** @class */ (function () {
    function CrearJuzgadoPage(navCtrl, navParams, _cjp, _ccp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cjp = _cjp;
        this._ccp = _ccp;
        this._ccp.ciudadActivas();
    }
    CrearJuzgadoPage.prototype.crearJuzgado = function (nomJuzgado, ciudad, estado) {
        var nuevoEstado;
        if (estado) {
            nuevoEstado = 'ACTIVO';
        }
        else {
            nuevoEstado = 'INACTIVO';
        }
        this._cjp.crearJuzgado(nomJuzgado, ciudad, nuevoEstado);
    };
    CrearJuzgadoPage = __decorate([
        Component({
            selector: 'page-crear-juzgado',
            templateUrl: 'crear-juzgado.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CrudJuzgadoProvider,
            CrudCiudadProvider])
    ], CrearJuzgadoPage);
    return CrearJuzgadoPage;
}());
export { CrearJuzgadoPage };
//# sourceMappingURL=crear-juzgado.js.map