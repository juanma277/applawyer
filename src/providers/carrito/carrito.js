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
import { AlertController, ToastController, ModalController } from 'ionic-angular';
//SERVICIOS
import { UsuarioProvider } from '../usuario/usuario';
import { LoadstoraProvider } from '../loadstora/loadstora';
//PAGINAS
import { CarritoPage } from '../../pages/carrito/carrito';
import { LoginPage } from '../../pages/login/login';
var CarritoProvider = /** @class */ (function () {
    function CarritoProvider(http, alertCtrl, toastCtrl, modalCtrl, _us, _ls) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this._us = _us;
        this._ls = _ls;
        console.log('Hello CarritoProvider Provider');
        this._ls.cargarStorage();
    }
    CarritoProvider.prototype.verCarrito = function () {
        var _this = this;
        var modal;
        if (this._us.token) {
            //MOSTRAR PAGINA DEL CARRITO
            modal = this.modalCtrl.create(CarritoPage);
        }
        else {
            //MOSTRAR LOGIN
            modal = this.modalCtrl.create(LoginPage);
        }
        modal.present();
        modal.onDidDismiss(function (abrirCarrito) {
            if (abrirCarrito) {
                _this.modalCtrl.create(CarritoPage).present();
            }
        });
    };
    CarritoProvider.prototype.agregarCarrito = function (item_parametro) {
        for (var _i = 0, _a = this._ls.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.codigo == item_parametro.codigo) {
                this.alertCtrl.create({
                    title: "Item Existe",
                    subTitle: "<b>" + item_parametro.producto + "</b>, ya se encuentra agregado en el carrito.",
                    buttons: ["Aceptar"]
                }).present();
                return;
            }
        }
        this._ls.items.push(item_parametro);
        this._ls.guardarStorage();
        this.toastCtrl.create({
            message: 'Producto Agregado Correctamente.',
            duration: 3000
        }).present();
    };
    CarritoProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            AlertController,
            ToastController,
            ModalController,
            UsuarioProvider,
            LoadstoraProvider])
    ], CarritoProvider);
    return CarritoProvider;
}());
export { CarritoProvider };
//# sourceMappingURL=carrito.js.map