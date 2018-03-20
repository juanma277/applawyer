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
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
//SERVICIOS
import { CrudUsuarioProvider } from '../../providers/crud-usuario/crud-usuario';
var EditarUsuarioPage = /** @class */ (function () {
    function EditarUsuarioPage(navCtrl, navParams, viewCtrl, _cup, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._cup = _cup;
        this.alertCtrl = alertCtrl;
        this.user = {};
        this.user = this.navParams.get("user");
        this.tipo_identificacion = this.user.tipoIdentificacion;
        this.genero = this.user.genero;
        this.rol = this.user.rol;
        if (this.user.estado === 'INACTIVO') {
            this.estado = false;
        }
        else {
            this.estado = true;
        }
    }
    EditarUsuarioPage.prototype.resetPassword = function () {
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
    EditarUsuarioPage.prototype.actualizarUsuario = function (id_user, nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero, rol, estado) {
        var nuevoEstado;
        if (estado) {
            nuevoEstado = 'ACTIVO';
        }
        else {
            nuevoEstado = 'INACTIVO';
        }
        this._cup.actualizarUsuario(id_user, nombres, apellidos, tipo_identificacion, identificacion, telefono, email, direccion, genero, rol, nuevoEstado);
    };
    EditarUsuarioPage = __decorate([
        Component({
            selector: 'page-editar-usuario',
            templateUrl: 'editar-usuario.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController,
            CrudUsuarioProvider,
            AlertController])
    ], EditarUsuarioPage);
    return EditarUsuarioPage;
}());
export { EditarUsuarioPage };
//# sourceMappingURL=editar-usuario.js.map