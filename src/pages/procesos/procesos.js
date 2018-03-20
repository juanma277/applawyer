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
import { CrudProcesosProvider } from '../../providers/crud-procesos/crud-procesos';
//PAGINAS
import { HistorialPage } from '../../pages/historial/historial';
import { CrearProcesoPage } from '../../pages/crear-proceso/crear-proceso';
import { EditarProcesoPage } from '../../pages/editar-proceso/editar-proceso';
var ProcesosPage = /** @class */ (function () {
    function ProcesosPage(navCtrl, navParams, _cpp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cpp = _cpp;
        this.verHistorial = HistorialPage;
        this.crearProceso = CrearProcesoPage;
        this.editarProcesoPage = EditarProcesoPage;
        this._cpp.obtenerProcesosAll();
    }
    ProcesosPage.prototype.buscarProceso = function (ev) {
        var valor = ev.target.value;
        this._cpp.buscarProceso(valor, this.id_usuario);
    };
    ProcesosPage = __decorate([
        Component({
            selector: 'page-procesos',
            templateUrl: 'procesos.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CrudProcesosProvider])
    ], ProcesosPage);
    return ProcesosPage;
}());
export { ProcesosPage };
//# sourceMappingURL=procesos.js.map