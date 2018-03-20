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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//SERVICIOS
import { ProductosProvider } from '../../providers/productos/productos';
//PAGINAS
import { ProductoPage } from '../index.paginas';
var BusquedaPage = /** @class */ (function () {
    function BusquedaPage(navCtrl, navParams, _ps) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ps = _ps;
        this.productoPage = ProductoPage;
    }
    BusquedaPage.prototype.buscarproductos = function (ev) {
        var valor = ev.target.value;
        console.log(valor);
        this._ps.buscarProducto(valor);
    };
    BusquedaPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-busqueda',
            templateUrl: 'busqueda.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ProductosProvider])
    ], BusquedaPage);
    return BusquedaPage;
}());
export { BusquedaPage };
//# sourceMappingURL=busqueda.js.map