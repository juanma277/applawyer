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
import { LoadstoraProvider } from '../../providers/loadstora/loadstora';
var CarritoPage = /** @class */ (function () {
    function CarritoPage(navCtrl, navParams, _ls, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ls = _ls;
        this.viewCtrl = viewCtrl;
        this._ls.cargarStorage();
        this._ls.actualizarTotal();
    }
    CarritoPage = __decorate([
        Component({
            selector: 'page-carrito',
            templateUrl: 'carrito.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            LoadstoraProvider,
            ViewController])
    ], CarritoPage);
    return CarritoPage;
}());
export { CarritoPage };
//# sourceMappingURL=carrito.js.map