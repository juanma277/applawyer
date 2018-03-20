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
import { NavController } from 'ionic-angular';
//SERVICIO JUZGADOS -PROCESOS -USUARIO
import { UsuarioProvider } from '../../providers/usuario/usuario';
//PAGINAS
import { ReporEstadoPage } from '../../pages/repor-estado/repor-estado';
import { ReporJuzgadoPage } from '../../pages/repor-juzgado/repor-juzgado';
import { ReporTipoPage } from '../../pages/repor-tipo/repor-tipo';
import { ReporCiudadPage } from '../../pages/repor-ciudad/repor-ciudad';
var InformesPage = /** @class */ (function () {
    function InformesPage(navCtrl, _up) {
        this.navCtrl = navCtrl;
        this._up = _up;
        this.reporEstadoPage = ReporEstadoPage;
        this.reporJuzgadoPage = ReporJuzgadoPage;
        this.reporTipoPage = ReporTipoPage;
        this.reporCiudadPage = ReporCiudadPage;
    }
    InformesPage = __decorate([
        Component({
            selector: 'page-informes',
            templateUrl: 'informes.html',
        }),
        __metadata("design:paramtypes", [NavController,
            UsuarioProvider])
    ], InformesPage);
    return InformesPage;
}());
export { InformesPage };
//# sourceMappingURL=informes.js.map