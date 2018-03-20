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
var EditarPlanPage = /** @class */ (function () {
    function EditarPlanPage(navCtrl, navParams, imagePicker, alertCtrl, camera, _cpp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagePicker = imagePicker;
        this.alertCtrl = alertCtrl;
        this.camera = camera;
        this._cpp = _cpp;
        this.plan = {};
        this.plan = this.navParams.get("plan");
        this.imagenPreView = "/users/" + this.plan.image;
        if (this.plan.estado === 'INACTIVO') {
            this.estado = false;
        }
        else {
            this.estado = true;
        }
    }
    EditarPlanPage.prototype.actualizarPlan = function (nomPlan, valor, cantidad, estado, id_plan) {
        var nuevoEstado;
        if (estado) {
            nuevoEstado = 'ACTIVO';
        }
        else {
            nuevoEstado = 'INACTIVO';
        }
        this._cpp.actualizarPlan(nomPlan, valor, cantidad, this.imagenPreView, nuevoEstado, id_plan);
    };
    EditarPlanPage.prototype.mostrarCamara = function () {
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
    EditarPlanPage.prototype.seleccionarFoto = function () {
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
    EditarPlanPage = __decorate([
        Component({
            selector: 'page-editar-plan',
            templateUrl: 'editar-plan.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ImagePicker,
            AlertController,
            Camera,
            CrudPlanProvider])
    ], EditarPlanPage);
    return EditarPlanPage;
}());
export { EditarPlanPage };
//# sourceMappingURL=editar-plan.js.map