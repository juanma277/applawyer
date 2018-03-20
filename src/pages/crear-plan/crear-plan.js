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
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera } from '@ionic-native/camera';
//SERVICIOS
import { CrudPlanProvider } from '../../providers/crud-plan/crud-plan';
var CrearPlanPage = /** @class */ (function () {
    function CrearPlanPage(navCtrl, navParams, _cpp, imagePicker, alertCtrl, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cpp = _cpp;
        this.imagePicker = imagePicker;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
    }
    CrearPlanPage.prototype.crearPlan = function (nomPlan, valor, cantidad, estado) {
        var nuevoEstado;
        if (estado) {
            nuevoEstado = 'ACTIVO';
        }
        else {
            nuevoEstado = 'INACTIVO';
        }
        this._cpp.crearPlan(nomPlan, valor, cantidad, nuevoEstado, this.imagenPreView);
    };
    CrearPlanPage.prototype.mostrarCamara = function () {
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
        }, function (err) {
            // Handle error
            _this.alertCtrl.create({
                title: 'Error!',
                subTitle: err,
                buttons: ["Aceptar"]
            }).present();
        });
    };
    CrearPlanPage.prototype.seleccionarFoto = function () {
        var _this = this;
        var opciones = {
            quality: 70,
            outputType: 1,
            maximumImagesCount: 1
        };
        this.imagePicker.getPictures(opciones).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.imagenPreView = 'data:image/jpeg;base64,' + results[i];
            }
        }, function (err) {
            _this.alertCtrl.create({
                title: 'Error!',
                subTitle: err,
                buttons: ["Aceptar"]
            }).present();
        });
    };
    CrearPlanPage = __decorate([
        Component({
            selector: 'page-crear-plan',
            templateUrl: 'crear-plan.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CrudPlanProvider,
            ImagePicker,
            AlertController,
            Camera])
    ], CrearPlanPage);
    return CrearPlanPage;
}());
export { CrearPlanPage };
//# sourceMappingURL=crear-plan.js.map