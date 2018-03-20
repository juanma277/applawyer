var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, ViewChild } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform, AlertController, ModalController, NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
//SERVICIOS
import { CrudProcesosProvider } from '../../providers/crud-procesos/crud-procesos';
//PAGINAS
import { ViewProcesoPage } from '../../pages/view-proceso/view-proceso';
import { ViewNotificacionPage } from '../../pages/view-notificacion/view-notificacion';
var PushnotificationProvider = /** @class */ (function () {
    function PushnotificationProvider(oneSignal, platform, alertCtrl, http, modalCtrl, _cpp) {
        this.oneSignal = oneSignal;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this._cpp = _cpp;
        this.historial = {};
        this.datosProceso = {};
        this.viewProcesoPage = ViewProcesoPage;
        this.viewNotificacionPage = ViewNotificacionPage;
    }
    PushnotificationProvider.prototype.init_notifications = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            // code...
            this.oneSignal.startInit('156748b6-481c-4fce-88b8-962863d67b8d', '111682406275');
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
            this.oneSignal.handleNotificationReceived().subscribe(function () {
                // do something when notification is received
                //EVENTO CUANDO LA NOTIFICACIÓN ES RECIBIDA
                _this.oneSignal.enableVibrate(true);
                //this.nav.push(ViewProcesoPage);
            });
            this.oneSignal.handleNotificationOpened().subscribe(function (data) {
                //EVENTO CUANDO LA NOTIFICACIÓN ES ABIERTA
                var payload = data;
                _this.TipoNotificacion = data.notification.payload.additionalData.TipoNotificacion;
                switch (_this.TipoNotificacion) {
                    case "1":
                        _this.id_proceso = data.notification.payload.additionalData.ID;
                        _this.demandante = data.notification.payload.additionalData.Demandante;
                        _this.demandado = data.notification.payload.additionalData.Demandado;
                        _this.radicado = data.notification.payload.additionalData.Radicado;
                        _this.actuacion = data.notification.payload.additionalData.Actuacion;
                        _this.anotacion = data.notification.payload.additionalData.Anotacion;
                        _this.despacho = data.notification.payload.additionalData.juzgado;
                        _this.tipoProceso = data.notification.payload.additionalData.tipoProceso;
                        var modalActuacion = void 0;
                        modalActuacion = _this.modalCtrl.create(ViewProcesoPage, { actuacion: _this.actuacion, anotacion: _this.anotacion, radicado: _this.radicado, demandante: _this.demandante, demandado: _this.demandado });
                        modalActuacion.present();
                        break;
                    case "2":
                        _this.radicado = data.notification.payload.additionalData.Radicado;
                        var modalAprobado = void 0;
                        modalAprobado = _this.modalCtrl.create(ViewNotificacionPage, { radicado: _this.radicado, mensaje: 'El proceso fue revisado y aprobado para consulta, cuando tenga algún tipo de cambio será notificado a través de los datos ingresados. ' });
                        modalAprobado.present();
                        break;
                    case "3":
                        _this.radicado = data.notification.payload.additionalData.Radicado;
                        var modalNoAprobado = void 0;
                        modalNoAprobado = _this.modalCtrl.create(ViewNotificacionPage, { radicado: _this.radicado, mensaje: 'El proceso fue revisado y No aprobado para consulta, por favor revisa e ingresa nuevamente los datos del proceso.' });
                        modalNoAprobado.present();
                        break;
                    default:
                        // code...
                        break;
                }
            });
            this.oneSignal.endInit();
        }
        else {
            console.log('INICIANDO ONE SIGNAL:');
        }
    };
    PushnotificationProvider.prototype.redirectToPage = function (data) {
        var type;
        try {
            type = data.notification.payload.additionalData.type;
        }
        catch (e) {
            console.warn(e);
        }
        var modal;
        modal = this.modalCtrl.create(ViewProcesoPage, { ID: data.notification.payload.additionalData.ID });
        modal.present();
    };
    PushnotificationProvider.prototype.obtenerPlayerID = function () {
        var _this = this;
        if (this.platform.is('cordova')) {
            this.oneSignal.getIds().then(function (id) {
                _this.player_id = id.userId;
            });
        }
        else {
            console.log('PLAYERID REGISTRADO EN CHROME: ' + this.player_id);
        }
    };
    __decorate([
        ViewChild('NAV'),
        __metadata("design:type", NavController)
    ], PushnotificationProvider.prototype, "nav", void 0);
    PushnotificationProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [OneSignal,
            Platform,
            AlertController,
            HttpClient,
            ModalController,
            CrudProcesosProvider])
    ], PushnotificationProvider);
    return PushnotificationProvider;
}());
export { PushnotificationProvider };
//# sourceMappingURL=pushnotification.js.map