var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ModalController } from 'ionic-angular';
//SERVICIOS
import { UsuarioProvider } from '../../providers/usuario/usuario';
import { CrudCiudadProvider } from '../../providers/crud-ciudad/crud-ciudad';
var CiudadesProvider = /** @class */ (function () {
    function CiudadesProvider(http, alertCtrl, modalCtrl, _us, _ccc) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this._us = _us;
        this._ccc = _ccc;
        console.log('Hello CiudadesProvider Provider');
    }
    CiudadesProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            AlertController,
            ModalController,
            UsuarioProvider,
            CrudCiudadProvider])
    ], CiudadesProvider);
    return CiudadesProvider;
}());
export { CiudadesProvider };
//# sourceMappingURL=ciudades.js.map