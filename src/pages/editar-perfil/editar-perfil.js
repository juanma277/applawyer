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
import { NavController, NavParams, AlertController } from 'ionic-angular';
//CAMARA Y SELECCION DE FOTOS
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';
//SERVICIOS
import { CrudUsuarioProvider } from '../../providers/crud-usuario/crud-usuario';
var EditarPerfilPage = /** @class */ (function () {
    function EditarPerfilPage(navCtrl, navParams, _cup, alertCtrl, camera, imagePicker) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cup = _cup;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this.imagePicker = imagePicker;
        this.user = {};
        this.user = this.navParams.get("user");
        this.tipo_identificacion = this.user.tipoIdentificacion;
        this.genero = this.user.genero;
        this.activarPass = false;
    }
    EditarPerfilPage.prototype.resetPassword = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Advertencia',
            message: '¿Estas seguro que quieres resetear la contraseña del usuario?',
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function () {
                        //EVENTO CUANDO PRESIONA CANCELAR
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function () {
                        _this._cup.resetPassword(_this.id_user, _this.identificacion);
                    }
                }
            ]
        });
        confirm.present();
    };
    EditarPerfilPage.prototype.actualizarPerfil = function (id_user, nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero, pass1, pass2) {
        if (this.activarPass) {
            if (pass1 == pass2) {
                if (this.imagenPreView != null) {
                    this._cup.actualizarPerfilPassImage(id_user, nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero, pass1, this.imagenPreView);
                }
                else {
                    this._cup.actualizarPerfilPass(id_user, nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero, pass1);
                }
            }
            else {
                this.alertCtrl.create({
                    title: 'Error!',
                    subTitle: 'Las contraseñas no coinciden',
                    buttons: ["Aceptar"]
                }).present();
            }
        }
        else {
            if (this.imagenPreView != null) {
                this._cup.actualizarPerfilImage(id_user, nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero, this.imagenPreView);
            }
            else {
                this._cup.actualizarPerfil(id_user, nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero);
            }
        }
    };
    EditarPerfilPage.prototype.mostrarCamara = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64:
            _this.imagenPreView = 'data:image/jpeg;base64,' + imageData;
            _this.imagenPrevia = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
            _this.alertCtrl.create({
                title: 'Error!',
                subTitle: err,
                buttons: ["Aceptar"]
            }).present();
        });
    };
    EditarPerfilPage.prototype.seleccionarFoto = function () {
        var _this = this;
        var opciones = {
            quality: 70,
            outputType: 1,
            maximumImagesCount: 1
        };
        this.imagePicker.getPictures(opciones).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.imagenPreView = 'data:image/jpeg;base64,' + results[i];
                _this.imagenPrevia = 'data:image/jpeg;base64,' + results[i];
            }
        }, function (err) {
            _this.alertCtrl.create({
                title: 'Error!',
                subTitle: err,
                buttons: ["Aceptar"]
            }).present();
        });
    };
    EditarPerfilPage = __decorate([
        Component({
            selector: 'page-editar-perfil',
            templateUrl: 'editar-perfil.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CrudUsuarioProvider,
            AlertController,
            Camera,
            ImagePicker])
    ], EditarPerfilPage);
    return EditarPerfilPage;
}());
export { EditarPerfilPage };
//# sourceMappingURL=editar-perfil.js.map