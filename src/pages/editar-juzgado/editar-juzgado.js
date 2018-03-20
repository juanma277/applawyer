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
var EditarJuzgadoPage = /** @class */ (function () {
    function EditarJuzgadoPage(navCtrl, navParams, _cjp, _ccp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cjp = _cjp;
        this._ccp = _ccp;
        this.juzgado = {};
        this._ccp.ciudadActivas();
        this.juzgado = this.navParams.get("juzgado");
        this.id_ciudad = this.juzgado.ciudad_id;
        if (this.juzgado.estado === 'INACTIVO') {
            this.estado = false;
        }
        else {
            this.estado = true;
        }
    }
    EditarJuzgadoPage.prototype.actualizarJuzgado = function (nombre, estado, id_ciudad, id_juzgado) {
        var nuevoEstado;
        if (estado) {
            nuevoEstado = 'ACTIVO';
        }
        else {
            nuevoEstado = 'INACTIVO';
        }
        this._cjp.actualizarJuzgado(nombre, id_ciudad, nuevoEstado, id_juzgado);
    };
    EditarJuzgadoPage = __decorate([
        Component({
            selector: 'page-editar-juzgado',
            templateUrl: 'editar-juzgado.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CrudJuzgadoProvider,
            CrudCiudadProvider])
    ], EditarJuzgadoPage);
    return EditarJuzgadoPage;
}());
export { EditarJuzgadoPage };
//# sourceMappingURL=editar-juzgado.js.map