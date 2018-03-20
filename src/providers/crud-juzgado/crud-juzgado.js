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
var CrudJuzgadoProvider = /** @class */ (function () {
    function CrudJuzgadoProvider(http, alertCtrl, toastCtrl, loadingCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.juzgados = [];
        this.juzgadosActivos = [];
        this.nombresJuzgado = Array();
    }
    CrudJuzgadoProvider.prototype.obtenerJuzgados = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        var url = URL_SERVICIOS_PRODUCCION + "juzgados/all";
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
                _this.juzgados = data['Juzgados'];
            }
        });
    };
    CrudJuzgadoProvider.prototype.obtenerJuzgadosActivos = function (id_ciudad) {
        var _this = this;
        var url = URL_SERVICIOS_PRODUCCION + "juzgados/activo/" + id_ciudad;
        this.http.get(url)
            .subscribe(function (data) {
            if (data['error']) {
                // ERROR
                _this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: data['Mensaje'],
                    buttons: ["Aceptar"]
                }).present();
                _this.juzgadosActivos = [];
            }
            else {
                _this.juzgadosActivos = data['Juzgados'];
            }
        });
    };
    CrudJuzgadoProvider.prototype.crearJuzgado = function (nombre, ciudad, estado) {
        var _this = this;
        var datos = { 'nombre': nombre, 'ciudad': ciudad, 'estado': estado };
        var url = URL_SERVICIOS_PRODUCCION + 'addJuzgado';
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
                    _this.obtenerJuzgados();
                    resolve();
                }
            });
        });
    };
    CrudJuzgadoProvider.prototype.actualizarJuzgado = function (nombre, ciudad, estado, id_juzgado) {
        var _this = this;
        var datos = { 'nombre': nombre, 'estado': estado, 'id_ciudad': ciudad, 'id_juzgado': id_juzgado };
        var url = URL_SERVICIOS_PRODUCCION + 'modifyJuzgado';
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
                    _this.obtenerJuzgados();
                    resolve();
                }
            });
        });
    };
    CrudJuzgadoProvider.prototype.buscarJuzgado = function (termino) {
        var _this = this;
        if (termino == "") {
            this.obtenerJuzgados();
        }
        else {
            var url = URL_SERVICIOS_PRODUCCION + "juzgado/buscar/" + termino;
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
                    _this.juzgados = data_resp['Juzgados'];
                }
            });
        }
    };
    CrudJuzgadoProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            AlertController,
            ToastController,
            LoadingController])
    ], CrudJuzgadoProvider);
    return CrudJuzgadoProvider;
}());
export { CrudJuzgadoProvider };
//# sourceMappingURL=crud-juzgado.js.map