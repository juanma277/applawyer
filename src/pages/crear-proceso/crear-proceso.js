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
import { NavController, NavParams } from 'ionic-angular';
//SERVICIOS
import { CrudJuzgadoProvider } from '../../providers/crud-juzgado/crud-juzgado';
import { CrudCiudadProvider } from '../../providers/crud-ciudad/crud-ciudad';
import { CrudTipoProcesoProvider } from '../../providers/crud-tipo-proceso/crud-tipo-proceso';
import { CrudProcesosProvider } from '../../providers/crud-procesos/crud-procesos';
import { UsuarioProvider } from '../../providers/usuario/usuario';
var CrearProcesoPage = /** @class */ (function () {
    function CrearProcesoPage(navCtrl, navParams, _cjp, _ccp, _ctp, _cpp, _up) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cjp = _cjp;
        this._ccp = _ccp;
        this._ctp = _ctp;
        this._cpp = _cpp;
        this._up = _up;
        this._ccp.ciudadActivas();
        this._ctp.tipoProcesoActivo();
        this.user_id = parseInt(this._up.id_usuario);
    }
    CrearProcesoPage.prototype.onSelectChange = function (selectedValue) {
        this._cjp.obtenerJuzgadosActivos(selectedValue);
    };
    CrearProcesoPage.prototype.crearProceso = function (tipoProceso, ciudad, juzgado, radicado, demandante, demandado, fecha, estado) {
        var nuevoEstado;
        if (estado) {
            nuevoEstado = 'ACTIVO';
        }
        else {
            nuevoEstado = 'INACTIVO';
        }
        this._cpp.crearProceso(this.user_id, tipoProceso, ciudad, juzgado, radicado, demandante, demandado, fecha, nuevoEstado);
    };
    CrearProcesoPage = __decorate([
        Component({
            selector: 'page-crear-proceso',
            templateUrl: 'crear-proceso.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CrudJuzgadoProvider,
            CrudCiudadProvider,
            CrudTipoProcesoProvider,
            CrudProcesosProvider,
            UsuarioProvider])
    ], CrearProcesoPage);
    return CrearProcesoPage;
}());
export { CrearProcesoPage };
//# sourceMappingURL=crear-proceso.js.map