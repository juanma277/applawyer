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
import { CrudPlanProvider } from '../../providers/crud-plan/crud-plan';
//PAGINAS
import { EditarPlanPage, CrearPlanPage } from '../index.paginas';
var PlanesPage = /** @class */ (function () {
    function PlanesPage(navCtrl, navParams, _cpp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cpp = _cpp;
        this.editarPlan = EditarPlanPage;
        this.crearPlan = CrearPlanPage;
        this._cpp.obtenerPlanes();
    }
    PlanesPage.prototype.buscarPlanes = function (ev) {
        var valor = ev.target.value;
        this._cpp.buscaPlan(valor);
    };
    PlanesPage = __decorate([
        Component({
            selector: 'page-planes',
            templateUrl: 'planes.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CrudPlanProvider])
    ], PlanesPage);
    return PlanesPage;
}());
export { PlanesPage };
//# sourceMappingURL=planes.js.map