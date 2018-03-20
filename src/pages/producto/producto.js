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
import { CarritoProvider } from '../../providers/carrito/carrito';
var ProductoPage = /** @class */ (function () {
    function ProductoPage(navCtrl, navParams, _cs) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cs = _cs;
        this.producto = {};
        console.log(this.navParams.get("producto"));
        this.producto = this.navParams.get("producto");
    }
    ProductoPage = __decorate([
        Component({
            selector: 'page-producto',
            templateUrl: 'producto.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CarritoProvider])
    ], ProductoPage);
    return ProductoPage;
}());
export { ProductoPage };
//# sourceMappingURL=producto.js.map