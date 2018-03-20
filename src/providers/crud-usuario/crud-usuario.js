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
var CrudUsuarioProvider = /** @class */ (function () {
    function CrudUsuarioProvider(http, alertCtrl, toastCtrl, loadingCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.usuarios = [];
        this.perfilUsuario = [];
    }
    CrudUsuarioProvider.prototype.perfil = function (id_usuario) {
        var _this = this;
        var url = URL_SERVICIOS_PRODUCCION + "usuario/perfil/" + id_usuario;
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
                _this.perfilUsuario = data['User'];
                _this.procesosPorUsuario = data['Procesos'];
            }
        });
    };
    CrudUsuarioProvider.prototype.obtenerUsuarios = function () {
        var _this = this;
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
        var url = URL_SERVICIOS_PRODUCCION + "usuarios/all";
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
                _this.usuarios = data['Users'];
            }
        });
    };
    CrudUsuarioProvider.prototype.actualizarUsuario = function (id_user, nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero, rol, estado) {
        var _this = this;
        var datos = { 'id_user': id_user, 'nombres': nombres, 'apellidos': apellidos, 'tipo_identificacion': tipo_identificacion, 'identificacion': identificacion, 'genero': genero, 'email': email, 'telefono': telefono, 'direccion': direccion, 'rol': rol, 'estado': estado };
        var url = URL_SERVICIOS_PRODUCCION + 'modifyUser';
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
                    _this.obtenerUsuarios();
                    resolve();
                }
            });
        });
    };
    CrudUsuarioProvider.prototype.actualizarPerfil = function (id_user, nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero) {
        var _this = this;
        var datos = { 'id_user': id_user, 'nombres': nombres, 'apellidos': apellidos, 'tipo_identificacion': tipo_identificacion, 'identificacion': identificacion, 'genero': genero, 'email': email, 'telefono': telefono, 'direccion': direccion };
        var url = URL_SERVICIOS_PRODUCCION + 'modifyPerfil';
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
                    _this.obtenerUsuarios();
                    _this.perfil(id_user);
                    resolve();
                }
            });
        });
    };
    CrudUsuarioProvider.prototype.actualizarPerfilPass = function (id_user, nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero, pass1) {
        var _this = this;
        var datos = { 'id_user': id_user, 'nombres': nombres, 'apellidos': apellidos, 'tipo_identificacion': tipo_identificacion, 'identificacion': identificacion, 'genero': genero, 'email': email, 'telefono': telefono, 'direccion': direccion, 'password': pass1 };
        var url = URL_SERVICIOS_PRODUCCION + 'modifyPerfilPass';
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
                    _this.obtenerUsuarios();
                    _this.perfil(id_user);
                    resolve();
                }
            });
        });
    };
    CrudUsuarioProvider.prototype.actualizarPerfilPassImage = function (id_user, nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero, pass1, imagen) {
        var _this = this;
        var datos = { 'id_user': id_user, 'nombres': nombres, 'apellidos': apellidos, 'tipo_identificacion': tipo_identificacion, 'identificacion': identificacion, 'genero': genero, 'email': email, 'telefono': telefono, 'direccion': direccion, 'password': pass1, 'imagen': imagen };
        var url = URL_SERVICIOS_PRODUCCION + 'modifyPerfilPassImage';
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
                    _this.obtenerUsuarios();
                    _this.perfil(id_user);
                    resolve();
                }
            });
        });
    };
    CrudUsuarioProvider.prototype.actualizarPerfilImage = function (id_user, nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero, imagen) {
        var _this = this;
        var datos = { 'id_user': id_user, 'nombres': nombres, 'apellidos': apellidos, 'tipo_identificacion': tipo_identificacion, 'identificacion': identificacion, 'genero': genero, 'email': email, 'telefono': telefono, 'direccion': direccion, 'imagen': imagen };
        var url = URL_SERVICIOS_PRODUCCION + 'modifyPerfilImage';
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
                    _this.obtenerUsuarios();
                    _this.perfil(id_user);
                    resolve();
                }
            });
        });
    };
    CrudUsuarioProvider.prototype.crearUsuario = function (nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero, rol, estado) {
        var _this = this;
        var datos = { 'nombres': nombres, 'apellidos': apellidos, 'tipo_identificacion': tipo_identificacion, 'identificacion': identificacion, 'rol': rol, 'telefono': telefono, 'email': email, 'direccion': direccion, 'estado': estado };
        var url = URL_SERVICIOS_PRODUCCION + 'addUser';
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
                    _this.obtenerUsuarios();
                    resolve();
                }
            });
        });
    };
    CrudUsuarioProvider.prototype.resetPassword = function (id_user, identificacion) {
        var _this = this;
        var datos = { 'id_user': id_user, 'identificacion': identificacion };
        var url = URL_SERVICIOS_PRODUCCION + 'usuario/reset/password';
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
                    _this.obtenerUsuarios();
                    resolve();
                }
            });
        });
    };
    CrudUsuarioProvider.prototype.buscaUsuario = function (termino) {
        var _this = this;
        if (termino == "") {
            this.obtenerUsuarios();
        }
        else {
            var url = URL_SERVICIOS_PRODUCCION + "users/buscar/" + termino;
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
                    _this.usuarios = data_resp['Usuarios'];
                }
            });
        }
    };
    CrudUsuarioProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            AlertController,
            ToastController,
            LoadingController])
    ], CrudUsuarioProvider);
    return CrudUsuarioProvider;
}());
export { CrudUsuarioProvider };
//# sourceMappingURL=crud-usuario.js.map