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
import { CrudCiudadProvider } from '../../providers/crud-ciudad/crud-ciudad';
//PAGINAS
import { EditarCiudadPage, CrearCiudadPage } from '../index.paginas';
var CiudadesPage = /** @class */ (function () {
    function CiudadesPage(navCtrl, navParams, _ccc) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ccc = _ccc;
        this.editarCiudad = EditarCiudadPage;
        this.crearCiudad = CrearCiudadPage;
        this._ccc.obtenerCiudades();
    }
    CiudadesPage.prototype.buscarCiudades = function (ev) {
        var valor = ev.target.value;
        this._ccc.buscarCiudad(valor);
    };
    CiudadesPage.prototype.inactivarCiudad = function (id) {
        this._ccc.inactivarCiudad(id);
    };
    CiudadesPage = __decorate([
        Component({
            selector: 'page-ciudades',
            templateUrl: 'ciudades.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CrudCiudadProvider])
    ], CiudadesPage);
    return CiudadesPage;
}());
export { CiudadesPage };
//# sourceMappingURL=ciudades.js.map