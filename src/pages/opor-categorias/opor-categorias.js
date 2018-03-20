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
import { ProductosProvider } from '../../providers/productos/productos';
import { ProductoPage } from '../producto/producto';
var OporCategoriasPage = /** @class */ (function () {
    function OporCategoriasPage(navCtrl, navParams, _ps) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ps = _ps;
        this.categoria = {};
        this.productoPage = ProductoPage;
        this.categoria = this.navParams.get("categoria");
        this._ps.cargarPorCategoria(this.categoria.id);
    }
    OporCategoriasPage = __decorate([
        Component({
            selector: 'page-opor-categorias',
            templateUrl: 'opor-categorias.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ProductosProvider])
    ], OporCategoriasPage);
    return OporCategoriasPage;
}());
export { OporCategoriasPage };
//# sourceMappingURL=opor-categorias.js.map