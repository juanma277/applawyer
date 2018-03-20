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
var CrudProcesosProvider = /** @class */ (function () {
    function CrudProcesosProvider(http, alertCtrl, toastCtrl, loadingCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.misProcesos = [];
        this.procesosAll = [];
        this.misNotificaciones = [];
        this.historial = [];
        this.datosProceso = [];
        this.pagina = 0;
        this.procesos = [];
        this.procesosPorJuzgado = [];
        this.procesosPorTipo = [];
        this.procesosPorEstado = [];
        this.procesosPorCiudad = [];
        this.notificacionesActivas = [];
    }
    CrudProcesosProvider.prototype.obtenerProcesos = function (id_usuario) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor espere...",
        });
        loader.present();
        var url = URL_SERVICIOS_PRODUCCION + "procesos/misProcesos/" + id_usuario;
        this.http.get(url)
            .subscribe(function (data) {
            if (data['error']) {
                // ERROR
                loader.dismiss();
                _this.alertCtrl.create({
                    title: 'Advertencia!',
                    subTitle: data['Mensaje'],
                    buttons: ["Aceptar"]
                }).present();
            }
            else {
                loader.dismiss();
                _this.misProcesos = data['Procesos'];
                _this.cuentaProcesos = data['Cuenta'];
            }
        });
    };
    CrudProcesosProvider.prototype.obtenerProcesosAll = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor espere...",
        });
        loader.present();
        var url = URL_SERVICIOS_PRODUCCION + "procesosAPI";
        this.http.get(url)
            .subscribe(function (data) {
            if (data['error']) {
                // ERROR
                loader.dismiss();
                _this.alertCtrl.create({
                    title: 'Advertencia!',
                    subTitle: data['Mensaje'],
                    buttons: ["Aceptar"]
                }).present();
            }
            else {
                loader.dismiss();
                _this.procesosAll = data['Procesos'];
                _this.cuentaProcesosAll = data['Cuenta'];
            }
        });
    };
    CrudProcesosProvider.prototype.obtenerNotificaciones = function (id_usuario) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Por favor espere...",
        });
        loader.present();
        var url = URL_SERVICIOS_PRODUCCION + "notificaciones/misNotificaciones/" + id_usuario;
        this.http.get(url)
            .subscribe(function (data) {
            if (data['error']) {
                // ERROR
                loader.dismiss();
                _this.alertCtrl.create({
                    title: 'Advertencia!',
                    subTitle: data['Mensaje'],
                    buttons: ["Aceptar"]
                }).present();
            }
            else {
                loader.dismiss();
                _this.misNotificaciones = data['Notificaciones'];
                _this.notificacionesActivas = data['Cuenta'];
            }
        });
    };
    CrudProcesosProvider.prototype.procesosJuzgado = function (id_usuario) {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            var url = URL_SERVICIOS_PRODUCCION + "procesosPorJuzgado/" + id_usuario;
            _this.http.get(url).subscribe(function (res) {
                if (res['error']) {
                    //ERROR
                    _this.alertCtrl.create({
                        title: 'Error!',
                        subTitle: res['Mensaje'],
                        buttons: ["Aceptar"]
                    }).present();
                }
                else {
                    _this.procesosPorJuzgado = res['procesosChart'];
                    //console.log(this.procesosPorJuzgado);
                }
                resolve();
            });
        });
        return promesa;
    };
    CrudProcesosProvider.prototype.procesosTipo = function (id_usuario) {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            var url = URL_SERVICIOS_PRODUCCION + "procesosPorTipo/" + id_usuario;
            _this.http.get(url).subscribe(function (res) {
                if (res['error']) {
                    //ERROR
                    _this.alertCtrl.create({
                        title: 'Error!',
                        subTitle: res['Mensaje'],
                        buttons: ["Aceptar"]
                    }).present();
                }
                else {
                    _this.procesosPorTipo = res['procesosChart'];
                    //console.log(this.procesosPorTipo);
                }
                resolve();
            });
        });
        return promesa;
    };
    CrudProcesosProvider.prototype.procesosCiudad = function (id_usuario) {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            var url = URL_SERVICIOS_PRODUCCION + "procesosPorCiudad/" + id_usuario;
            _this.http.get(url).subscribe(function (res) {
                if (res['error']) {
                    //ERROR
                    _this.alertCtrl.create({
                        title: 'Error!',
                        subTitle: res['Mensaje'],
                        buttons: ["Aceptar"]
                    }).present();
                }
                else {
                    _this.procesosPorCiudad = res['procesosChart'];
                    //console.log(this.procesosPorTipo);
                }
                resolve();
            });
        });
        return promesa;
    };
    CrudProcesosProvider.prototype.procesosEstado = function (id_usuario) {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            var url = URL_SERVICIOS_PRODUCCION + "procesosPorEstado/" + id_usuario;
            _this.http.get(url).subscribe(function (res) {
                if (res['error']) {
                    //ERROR
                    _this.alertCtrl.create({
                        title: 'Error!',
                        subTitle: res['Mensaje'],
                        buttons: ["Aceptar"]
                    }).present();
                }
                else {
                    _this.procesosPorEstado = res['procesosChart'];
                    console.log(_this.procesosPorEstado);
                }
                resolve();
            });
        });
        return promesa;
    };
    CrudProcesosProvider.prototype.procesosUsuario = function (id_usuario) {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            var url = URL_SERVICIOS_PRODUCCION + "procesos/misProcesosPagina/" + id_usuario + "/" + _this.pagina;
            _this.http.get(url).subscribe(function (res) {
                if (res['error']) {
                    //ERROR
                    _this.alertCtrl.create({
                        title: 'Error!',
                        subTitle: res['Mensaje'],
                        buttons: ["Aceptar"]
                    }).present();
                }
                else {
                    var nuevaData = _this.agrupar(res['Procesos'], 2);
                    (_a = _this.procesos).push.apply(_a, nuevaData);
                    _this.pagina = _this.pagina + 1;
                }
                resolve();
                var _a;
            });
        });
        return promesa;
    };
    CrudProcesosProvider.prototype.obtenerHistorial = function (id_proceso) {
        var _this = this;
        var url = URL_SERVICIOS_PRODUCCION + "procesos/historial/" + id_proceso;
        this.http.get(url)
            .subscribe(function (data) {
            if (data['error']) {
                // ERROR
                _this.historial = null;
                _this.alertCtrl.create({
                    title: 'Advertencia!',
                    subTitle: data['Mensaje'],
                    buttons: ["Aceptar"]
                }).present();
            }
            else {
                _this.historial = data['Historial'];
                _this.datosProceso = data['Proceso'];
            }
        });
    };
    CrudProcesosProvider.prototype.obtenerHistorialUpdateNotificacion = function (id_proceso, id_notificacion, id_user) {
        var _this = this;
        var url = URL_SERVICIOS_PRODUCCION + "procesos/historial/notificacion/" + id_proceso + "/" + id_notificacion;
        this.http.get(url)
            .subscribe(function (data) {
            if (data['error']) {
                // ERROR
                _this.historial = null;
                _this.alertCtrl.create({
                    title: 'Advertencia!',
                    subTitle: data['Mensaje'],
                    buttons: ["Aceptar"]
                }).present();
            }
            else {
                _this.historial = data['Historial'];
                _this.datosProceso = data['Proceso'];
                _this.obtenerNotificaciones(id_user);
            }
        });
    };
    CrudProcesosProvider.prototype.buscarProceso = function (termino, id_usuario) {
        var _this = this;
        if (termino == "") {
            this.obtenerProcesos(id_usuario);
        }
        else {
            var url = URL_SERVICIOS_PRODUCCION + "proceso/buscar/" + termino;
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
                    _this.misProcesos = data_resp['Procesos'];
                }
            });
        }
    };
    CrudProcesosProvider.prototype.crearProceso = function (user_id, tipoProceso, ciudad, juzgado, radicado, demandante, demandado, fecha, estado) {
        var _this = this;
        var datos = { 'user_id': user_id, 'tipoProceso': tipoProceso, 'ciudad': ciudad, 'juzgado': juzgado, 'radicado': radicado, 'demandante': demandante, 'demandado': demandado, 'fecha': fecha, 'estado': estado };
        var url = URL_SERVICIOS_PRODUCCION + 'addProceso';
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
                    _this.obtenerProcesos(user_id);
                    resolve();
                }
            });
        });
    };
    CrudProcesosProvider.prototype.agrupar = function (arr, tamano) {
        var nuevoArreglo = [];
        for (var i = 0; i < arr.length; i += tamano) {
            nuevoArreglo.push(arr.slice(i, i + tamano));
        }
        console.log(nuevoArreglo);
        return nuevoArreglo;
    };
    CrudProcesosProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            AlertController,
            ToastController,
            LoadingController])
    ], CrudProcesosProvider);
    return CrudProcesosProvider;
}());
export { CrudProcesosProvider };
//# sourceMappingURL=crud-procesos.js.map