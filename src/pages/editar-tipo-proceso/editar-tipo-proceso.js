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
var EditarTipoProcesoPage = /** @class */ (function () {
    function EditarTipoProcesoPage(navCtrl, navParams, _ctpp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ctpp = _ctpp;
        this.tipo = {};
        this.tipo = this.navParams.get("tipo");
        if (this.tipo.estado === 'INACTIVO') {
            this.estado = false;
        }
        else {
            this.estado = true;
        }
    }
    EditarTipoProcesoPage.prototype.actualizarTipo = function (tipo, estado, id_tipo) {
        var nuevoEstado;
        if (estado) {
            nuevoEstado = 'ACTIVO';
        }
        else {
            nuevoEstado = 'INACTIVO';
        }
        this._ctpp.actualizarTipo(tipo, nuevoEstado, id_tipo);
    };
    EditarTipoProcesoPage = __decorate([
        Component({
            selector: 'page-editar-tipo-proceso',
            templateUrl: 'editar-tipo-proceso.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CrudTipoProcesoProvider])
    ], EditarTipoProcesoPage);
    return EditarTipoProcesoPage;
}());
export { EditarTipoProcesoPage };
//# sourceMappingURL=editar-tipo-proceso.js.map