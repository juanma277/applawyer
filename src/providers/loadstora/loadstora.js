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
import { Platform, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//SERVICIOS
import { URL_SERVICIOS_PRODUCCION } from '../../config/url.servicios';
import { UsuarioProvider } from '../usuario/usuario';
var LoadstoraProvider = /** @class */ (function () {
    function LoadstoraProvider(http, platform, storage, _us, alertCtrl) {
        this.http = http;
        this.platform = platform;
        this.storage = storage;
        this._us = _us;
        this.alertCtrl = alertCtrl;
        this.items = [];
        this.totalPagar = 0;
        this.ordenes = [];
        this.confirm = false;
    }
    LoadstoraProvider.prototype.guardarStorage = function () {
        if (this.platform.is("cordova")) {
            //DISPOSITIVO
            this.storage.set('items', this.items);
        }
        else {
            //ESCRITORIO
            localStorage.setItem("items", JSON.stringify(this.items));
        }
    };
    LoadstoraProvider.prototype.cargarStorage = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            if (_this.platform.is("cordova")) {
                //DISPOSITIVO
                _this.storage.ready().then(function () {
                    _this.storage.get("items").then(function (items) {
                        if (items) {
                            _this.items = items;
                        }
                        resolve();
                    });
                });
            }
            else {
                //ESCRITORIO
                if (localStorage.getItem("items")) {
                    //EXISTE ITEMS EN EL LOCALSTORAGE
                    _this.items = JSON.parse(localStorage.getItem("items"));
                }
                resolve();
            }
        });
        return promesa;
    };
    LoadstoraProvider.prototype.realizarPedido = function () {
        var _this = this;
        var codigos = [];
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            codigos.push(item.codigo);
        }
        var datos = { 'items': codigos.join(",") };
        var url = URL_SERVICIOS_PRODUCCION + "pedidos/orden/" + this._us.token + "/" + this._us.id_usuario;
        this.http.post(url, datos)
            .subscribe(function (resp) {
            var respuesta = resp;
            if (respuesta['error']) {
                //MOSTRAR ERROR
                _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: respuesta['Mensaje'],
                    buttons: ['Aceptar']
                }).present();
            }
            else {
                //SIN ERRORES
                _this.items = [];
                _this.guardarStorage();
                _this.alertCtrl.create({
                    title: 'Orden Realizada',
                    subTitle: 'Nos contactaremos con usted.',
                    buttons: ['Aceptar']
                }).present();
            }
        });
    };
    LoadstoraProvider.prototype.actualizarTotal = function () {
        this.totalPagar = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            this.totalPagar += Number(item.precio_compra);
        }
    };
    LoadstoraProvider.prototype.removeItem = function (index) {
        this.items.splice(index, 1);
        this.guardarStorage();
        this.actualizarTotal();
    };
    LoadstoraProvider.prototype.cargarOrdenes = function () {
        var _this = this;
        var url = URL_SERVICIOS_PRODUCCION + "pedidos/obtener/" + this._us.token + "/" + this._us.id_usuario;
        this.http.get(url)
            .subscribe(function (resp) {
            var respuesta = resp;
            if (respuesta['error']) {
                //MOSTRAR EL ERROR
                _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: respuesta['Mensaje'],
                    buttons: ['Aceptar']
                }).present();
            }
            else {
                _this.ordenes = respuesta['Ordenes'];
            }
        });
    };
    LoadstoraProvider.prototype.borrarOrden = function (orden_id) {
        var _this = this;
        var url = URL_SERVICIOS_PRODUCCION + "pedidos/delete/" + this._us.token + "/" + this._us.id_usuario + "/" + orden_id;
        return new Promise(function (resolve) {
            _this.http.delete(url)
                .subscribe(function (resp) {
                _this.items = [];
                _this.guardarStorage();
                //let data_resp = resp;
                resolve();
            });
        });
    };
    LoadstoraProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            Platform,
            Storage,
            UsuarioProvider,
            AlertController])
    ], LoadstoraProvider);
    return LoadstoraProvider;
}());
export { LoadstoraProvider };
//# sourceMappingURL=loadstora.js.map