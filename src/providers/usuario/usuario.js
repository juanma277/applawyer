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
import { Injectable, ViewChild } from '@angular/core';
import { AlertController, Platform, LoadingController, NavController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//URL DEL SERVICIO
import { URL_SERVICIOS_PRODUCCION } from '../../config/url.servicios';
//SERVICIO PUSH NOTIFICACIONES - ONESIGNAL
import { PushnotificationProvider } from '../../providers/pushnotification/pushnotification';
//SERVICIO DE PROCESOS
import { CrudProcesosProvider } from '../../providers/crud-procesos/crud-procesos';
//PAGINAS
import { HomePage } from '../../pages/home/home';
var UsuarioProvider = /** @class */ (function () {
    function UsuarioProvider(http, alertCtrl, platform, storage, loadingCtrl, _pnp, _cpp, toastCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this._pnp = _pnp;
        this._cpp = _cpp;
        this.toastCtrl = toastCtrl;
        this.homePage = HomePage;
        this.cargarStorage();
        this._pnp.obtenerPlayerID();
    }
    UsuarioProvider.prototype.ingresar = function (identificacion, contrasena) {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Cargando ...",
        });
        loader.present();
        var datos = { 'ident': identificacion, 'contrasena': contrasena };
        var url = URL_SERVICIOS_PRODUCCION + 'loginAPI';
        return new Promise(function (resolve) {
            _this.http.post(url, datos)
                .subscribe(function (resp) {
                var data_resp = resp;
                if (data_resp['error']) {
                    loader.dismiss();
                    _this.alertCtrl.create({
                        title: 'Error!',
                        subTitle: data_resp['Mensaje'],
                        buttons: ["Aceptar"]
                    }).present();
                }
                else {
                    _this.token = data_resp['token'];
                    _this.id_usuario = data_resp['id_usuario'];
                    _this.rol = data_resp['rol'];
                    _this.activo = "1";
                    _this.name = data_resp['name'];
                    _this.userImage = data_resp['image'];
                    _this.player_id = _this._pnp.player_id;
                    //GUARDAR EN EL STORAGE
                    _this.guardarStorage();
                    _this.registrarPlayerID(_this.player_id, _this.id_usuario);
                    _this._cpp.obtenerProcesos(parseInt(_this.id_usuario));
                    loader.dismiss();
                    resolve();
                }
            });
        });
    };
    UsuarioProvider.prototype.registrarPlayerID = function (player_id, id_usuario) {
        //SE REALIZA UN UPDATE A LA BASE DE DATOS -> TABLA USER -> CAMPO PLAYER_ID
        var _this = this;
        if (this.platform.is("cordova")) {
            var url = URL_SERVICIOS_PRODUCCION + "usuario/playerID/" + player_id + "/" + id_usuario;
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
                    //EVENTO
                    var toast = _this.toastCtrl.create({
                        message: 'Movil registrado correctamente.',
                        duration: 3000
                    });
                    toast.present();
                }
            });
        }
        else {
            var url = URL_SERVICIOS_PRODUCCION + "usuario/playerID/DESDE-WEB-123456/" + id_usuario;
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
                    //EVENTO
                    var toast = _this.toastCtrl.create({
                        message: 'Movil registrado correctamente.',
                        duration: 3000
                    });
                    toast.present();
                }
            });
        }
    };
    UsuarioProvider.prototype.cerrarSession = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            //SE ACTUALIZA EN LA TABLA USER EL CAMPO ID_PLAYER
            var url = URL_SERVICIOS_PRODUCCION + "usuario/playerID/CERRANDO-SESSION-123456/" + _this.id_usuario;
            _this.http.get(url)
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
                    //EVENTO
                    _this.alertCtrl.create({
                        title: 'Correcto',
                        subTitle: 'Sessión cerrada exitosamente. Vuelve pronto.',
                        buttons: ["Aceptar"]
                    }).present();
                    _this.limpiarDatos();
                    //GUARDAR STORAGE
                    _this.guardarStorage();
                    resolve();
                }
            });
        });
        return promesa;
    };
    UsuarioProvider.prototype.guardarStorage = function () {
        if (this.platform.is("cordova")) {
            //DISPOSITIVO
            this.storage.set('token', this.token);
            this.storage.set('id_usuario', this.id_usuario);
            this.storage.set('rol', this.rol);
            this.storage.set('activo', this.activo);
            this.storage.set('name', this.name);
            this.storage.set('playerID', this.player_id);
            this.storage.set('userImage', this.userImage);
        }
        else {
            //ESCRITORIO
            if (this.token) {
                localStorage.setItem("token", this.token);
                localStorage.setItem("id_usuario", this.id_usuario);
                localStorage.setItem("rol", this.rol);
                localStorage.setItem("activo", this.activo);
                localStorage.setItem("name", this.name);
                localStorage.setItem('playerID', this.player_id);
                localStorage.setItem('userImage', this.userImage);
            }
            else {
                localStorage.removeItem("token");
                localStorage.removeItem("id_usuario");
                localStorage.removeItem("rol");
                localStorage.removeItem("activo");
                localStorage.removeItem("name");
                localStorage.removeItem("playerID");
                localStorage.removeItem("userImage");
            }
        }
    };
    UsuarioProvider.prototype.cargarStorage = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            if (_this.platform.is("cordova")) {
                //DISPOSITIVO
                _this.storage.ready().then(function () {
                    _this.storage.get("token").then(function (token) {
                        if (token) {
                            _this.token = token;
                        }
                    });
                    _this.storage.get("rol").then(function (rol) {
                        if (rol) {
                            _this.rol = rol;
                        }
                    });
                    _this.storage.get("activo").then(function (activo) {
                        if (activo) {
                            _this.activo = activo;
                        }
                    });
                    _this.storage.get("name").then(function (name) {
                        if (name) {
                            _this.name = name;
                        }
                    });
                    _this.storage.get("playerID").then(function (playerID) {
                        if (playerID) {
                            _this.player_id = playerID;
                        }
                    });
                    _this.storage.get("userImage").then(function (userImage) {
                        if (userImage) {
                            _this.userImage = userImage;
                        }
                    });
                    _this.storage.get("id_usuario").then(function (id_usuario) {
                        if (id_usuario) {
                            _this.id_usuario = id_usuario;
                        }
                        resolve();
                    });
                });
            }
            else {
                //ESCRITORIO
                if (localStorage.getItem("token")) {
                    //EXISTE ITEMS EN EL LOCALSTORAGE
                    _this.token = localStorage.getItem("token");
                    _this.id_usuario = localStorage.getItem("id_usuario");
                    _this.rol = localStorage.getItem("rol");
                    _this.activo = localStorage.getItem("activo");
                    _this.name = localStorage.getItem("name");
                    _this.player_id = localStorage.getItem("playerID");
                    _this.userImage = localStorage.getItem("userImage");
                }
                resolve();
            }
        });
        return promesa;
    };
    UsuarioProvider.prototype.limpiarDatos = function () {
        this.token = null;
        this.id_usuario = null;
        this.rol = "INDEFINIDO";
        this.activo = "0";
        this.name = null;
        this.player_id = null;
        this.userImage = "logo.png";
        this._cpp.misProcesos = [];
        this._cpp.misNotificaciones = [];
        this._cpp.historial = [];
        this._cpp.datosProceso = [];
        this._cpp.procesos = [];
        this._cpp.procesosPorJuzgado = [];
        this._cpp.procesosPorTipo = [];
        this._cpp.procesosPorEstado = [];
        this._cpp.cuentaProcesos = null;
    };
    __decorate([
        ViewChild('NavCtrl'),
        __metadata("design:type", NavController)
    ], UsuarioProvider.prototype, "nav", void 0);
    UsuarioProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            AlertController,
            Platform,
            Storage,
            LoadingController,
            PushnotificationProvider,
            CrudProcesosProvider,
            ToastController])
    ], UsuarioProvider);
    return UsuarioProvider;
}());
export { UsuarioProvider };
//# sourceMappingURL=usuario.js.map