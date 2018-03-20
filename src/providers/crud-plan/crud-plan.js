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
var CrudPlanProvider = /** @class */ (function () {
    function CrudPlanProvider(http, alertCtrl, toastCtrl, loadingCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.planes = [];
    }
    CrudPlanProvider.prototype.obtenerPlanes = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        var url = URL_SERVICIOS_PRODUCCION + "planes/all";
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
                _this.planes = data['Planes'];
            }
        });
    };
    CrudPlanProvider.prototype.crearPlan = function (nomPlan, valor, cantidad, estado, imagen) {
        var _this = this;
        var datos = { 'nombre': nomPlan, 'valor': valor, 'cantidad': cantidad, 'estado': estado, 'imagen': imagen };
        var url = URL_SERVICIOS_PRODUCCION + 'addPlan';
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
                    _this.obtenerPlanes();
                    resolve();
                }
            });
        });
    };
    CrudPlanProvider.prototype.actualizarPlan = function (nomPlan, valor, cantidad, imagenPreView, estado, id_plan) {
        var _this = this;
        var datos = { 'nombre': nomPlan, 'valor': valor, 'cantidad': cantidad, 'estado': estado, 'imagen': imagenPreView, 'id_plan': id_plan };
        var url = URL_SERVICIOS_PRODUCCION + 'modifyPlan';
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
                    _this.obtenerPlanes();
                    resolve();
                }
            });
        });
    };
    CrudPlanProvider.prototype.buscaPlan = function (termino) {
        var _this = this;
        if (termino == "") {
            this.obtenerPlanes();
        }
        else {
            var url = URL_SERVICIOS_PRODUCCION + "planes/buscar/" + termino;
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
                    _this.planes = data_resp['Planes'];
                }
            });
        }
    };
    CrudPlanProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            AlertController,
            ToastController,
            LoadingController])
    ], CrudPlanProvider);
    return CrudPlanProvider;
}());
export { CrudPlanProvider };
//# sourceMappingURL=crud-plan.js.map