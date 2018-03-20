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
//PAGINAS
import { EditarJuzgadoPage, CrearJuzgadoPage } from '../index.paginas';
var JuzgadosPage = /** @class */ (function () {
    function JuzgadosPage(navCtrl, navParams, _cjp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cjp = _cjp;
        this.editarJuzgado = EditarJuzgadoPage;
        this.crearJuzgado = CrearJuzgadoPage;
        this._cjp.obtenerJuzgados();
    }
    JuzgadosPage.prototype.buscarJuzgados = function (ev) {
        var valor = ev.target.value;
        this._cjp.buscarJuzgado(valor);
    };
    JuzgadosPage = __decorate([
        Component({
            selector: 'page-juzgados',
            templateUrl: 'juzgados.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CrudJuzgadoProvider])
    ], JuzgadosPage);
    return JuzgadosPage;
}());
export { JuzgadosPage };
//# sourceMappingURL=juzgados.js.map