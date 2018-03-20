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
import { NavController, NavParams, LoadingController } from 'ionic-angular';
//SERVICIOS
import { CrudUsuarioProvider } from '../../providers/crud-usuario/crud-usuario';
import { UsuarioProvider } from '../../providers/usuario/usuario';
//PAGINAS
import { EditarPerfilPage } from '../../pages/editar-perfil/editar-perfil';
var PerfilPage = /** @class */ (function () {
    function PerfilPage(navCtrl, navParams, _cup, _up, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cup = _cup;
        this._up = _up;
        this.loadingCtrl = loadingCtrl;
        this.editarPerfil = EditarPerfilPage;
        this.perfil = [];
        var loader = this.loadingCtrl.create({
            content: "Cargando ...",
        });
        loader.present();
        this.id_usuario = parseInt(_up.id_usuario);
        this._cup.perfil(this.id_usuario);
        loader.dismiss();
    }
    PerfilPage = __decorate([
        Component({
            selector: 'page-perfil',
            templateUrl: 'perfil.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CrudUsuarioProvider,
            UsuarioProvider,
            LoadingController])
    ], PerfilPage);
    return PerfilPage;
}());
export { PerfilPage };
//# sourceMappingURL=perfil.js.map