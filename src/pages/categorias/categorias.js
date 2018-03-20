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
//PAGINAS
import { OporCategoriasPage } from '../index.paginas';
var CategoriasPage = /** @class */ (function () {
    function CategoriasPage(navCtrl, navParams, _ps) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._ps = _ps;
        this.porCategorias = OporCategoriasPage;
    }
    CategoriasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoriasPage');
    };
    CategoriasPage = __decorate([
        Component({
            selector: 'page-categorias',
            templateUrl: 'categorias.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ProductosProvider])
    ], CategoriasPage);
    return CategoriasPage;
}());
export { CategoriasPage };
//# sourceMappingURL=categorias.js.map