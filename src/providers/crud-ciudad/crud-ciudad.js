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
import { AlertController, ToastController, LoadingController } from 'ionic-angular';
//URL DEL SERVICIO
import { URL_SERVICIOS_PRODUCCION } from '../../config/url.servicios';
var CrudCiudadProvider = /** @class */ (function () {
    function CrudCiudadProvider(http, alertCtrl, toastCtrl, loadingCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.ciudades = [];
    }
    CrudCiudadProvider.prototype.actualizarCiudad = function (nombre, estado, id_ciudad) {
        var _this = this;
        var datos = { 'nombre': nombre, 'estado': estado, 'id_ciudad': id_ciudad };
        var url = URL_SERVICIOS_PRODUCCION + 'modifyCiudad';
        return new Promise(function (resolve) {
            _this.http.post(url, datos)
                .subscribe(function (resp) {
                var data_resp = resp;
                if (data_resp['error']) {
                    _this.alertCtrl.create({
                        title: 'Error!',
                        subTitle: data_resp['Mensaje'],
                        buttons: ["Aceptar"]
                    }).present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data_resp['Mensaje'],
                        duration: 3000
                    });
                    toast.present();
                    _this.obtenerCiudades();
                    resolve();
                }
            });
        });
    };
    CrudCiudadProvider.prototype.obtenerCiudades = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        var url = URL_SERVICIOS_PRODUCCION + "ciudades/all";
        this.http.get(url)
            .subscribe(function (data) {
            if (data['error']) {
                // ERROR
                loader.dismiss();
                _this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: data['Mensaje'],
                    buttons: ["Aceptar"]
                }).present();
            }
            else {
                loader.dismiss();
                _this.ciudades = data['ciudades'];
            }
        });
    };
    CrudCiudadProvider.prototype.ciudadActivas = function () {
        var _this = this;
        var url = URL_SERVICIOS_PRODUCCION + "ciudades/activas";
        this.http.get(url)
            .subscribe(function (data) {
            if (data['error']) {
                // ERROR
                _this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: data['Mensaje'],
                    buttons: ["Aceptar"]
                }).present();
            }
            else {
                _this.ciudadesActivas = data['ciudades'];
            }
        });
    };
    CrudCiudadProvider.prototype.crearCiudad = function (nombre, estado) {
        var _this = this;
        var datos = { 'nombre': nombre, 'estado': estado };
        var url = URL_SERVICIOS_PRODUCCION + 'addCiudad';
        return new Promise(function (resolve) {
            _this.http.post(url, datos)
                .subscribe(function (resp) {
                var data_resp = resp;
                if (data_resp['error']) {
                    _this.alertCtrl.create({
                        title: 'Error!',
                        subTitle: data_resp['Mensaje'],
                        buttons: ["Aceptar"]
                    }).present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data_resp['Mensaje'],
                        duration: 3000
                    });
                    toast.present();
                    _this.obtenerCiudades();
                    resolve();
                }
            });
        });
    };
    CrudCiudadProvider.prototype.buscarCiudad = function (termino) {
        var _this = this;
        if (termino == "") {
            this.obtenerCiudades();
        }
        else {
            var url = URL_SERVICIOS_PRODUCCION + "ciudad/buscar/" + termino;
            this.http.get(url)
                .subscribe(function (resp) {
                var data_resp = resp;
                if (data_resp['error']) {
                    var toast = _this.toastCtrl.create({
                        message: data_resp['Mensaje'],
                        duration: 3000
                    });
                    toast.present();
                }
                else {
                    _this.ciudades = data_resp['Ciudades'];
                }
            });
        }
    };
    CrudCiudadProvider.prototype.inactivarCiudad = function (id_ciudad) {
        var _this = this;
        var datos = { 'id_ciudad': id_ciudad };
        var url = URL_SERVICIOS_PRODUCCION + 'modifyCiudad/' + id_ciudad;
        this.http.get(url)
            .subscribe(function (resp) {
            var data_resp = resp;
            if (data_resp['error']) {
                var toast = _this.toastCtrl.create({
                    message: data_resp['Mensaje'],
                    duration: 3000
                });
                toast.present();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: data_resp['Mensaje'],
                    duration: 3000
                });
                toast.present();
                _this.obtenerCiudades();
            }
        });
    };
    CrudCiudadProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            AlertController,
            ToastController,
            LoadingController])
    ], CrudCiudadProvider);
    return CrudCiudadProvider;
}());
export { CrudCiudadProvider };
//# sourceMappingURL=crud-ciudad.js.map