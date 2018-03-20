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
import { LoadstoraProvider } from '../../providers/loadstora/loadstora';
var OrdenesDetallePage = /** @class */ (function () {
    function OrdenesDetallePage(navCtrl, navParams, _ls) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ls = _ls;
        this.orden = {};
        this.orden = this.navParams.get("orden");
    }
    OrdenesDetallePage.prototype.borrarOrden = function (orden_id) {
        var _this = this;
        this._ls.borrarOrden(orden_id)
            .then(function (data_resp) {
            if (data_resp) {
            }
            else {
                _this.navCtrl.pop();
            }
        });
    };
    OrdenesDetallePage = __decorate([
        Component({
            selector: 'page-ordenes-detalle',
            templateUrl: 'ordenes-detalle.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            LoadstoraProvider])
    ], OrdenesDetallePage);
    return OrdenesDetallePage;
}());
export { OrdenesDetallePage };
//# sourceMappingURL=ordenes-detalle.js.map