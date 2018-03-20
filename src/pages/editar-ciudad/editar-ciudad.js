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
import { NavController, NavParams, ViewController } from 'ionic-angular';
//SERVICIOS
import { CrudCiudadProvider } from '../../providers/crud-ciudad/crud-ciudad';
var EditarCiudadPage = /** @class */ (function () {
    function EditarCiudadPage(navCtrl, navParams, viewCtrl, _crud) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._crud = _crud;
        this.ciudad = {};
        this.ciudad = this.navParams.get("ciudad");
        if (this.ciudad.estado === 'INACTIVO') {
            this.estado = false;
        }
        else {
            this.estado = true;
        }
    }
    EditarCiudadPage.prototype.actualizarCiudad = function (ciudad, estado, id_ciudad) {
        var nuevoEstado;
        if (estado) {
            nuevoEstado = 'ACTIVO';
        }
        else {
            nuevoEstado = 'INACTIVO';
        }
        this._crud.actualizarCiudad(ciudad, nuevoEstado, id_ciudad);
    };
    EditarCiudadPage = __decorate([
        Component({
            selector: 'page-editar-ciudad',
            templateUrl: 'editar-ciudad.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController,
            CrudCiudadProvider])
    ], EditarCiudadPage);
    return EditarCiudadPage;
}());
export { EditarCiudadPage };
//# sourceMappingURL=editar-ciudad.js.map