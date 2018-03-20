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
var HistorialPage = /** @class */ (function () {
    function HistorialPage(navCtrl, navParams, _cpp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cpp = _cpp;
        this.proceso = {};
        this.proceso = this.navParams.get("proceso");
        this.notiID = this.proceso.notiID;
        this.userID = this.proceso.userID;
        this.id_proceso = this.proceso.id;
        if (this.notiID) {
            this._cpp.obtenerHistorialUpdateNotificacion(this.id_proceso, this.notiID, this.userID);
        }
        else {
            this._cpp.obtenerHistorial(this.id_proceso);
        }
    }
    HistorialPage = __decorate([
        Component({
            selector: 'page-historial',
            templateUrl: 'historial.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CrudProcesosProvider])
    ], HistorialPage);
    return HistorialPage;
}());
export { HistorialPage };
//# sourceMappingURL=historial.js.map