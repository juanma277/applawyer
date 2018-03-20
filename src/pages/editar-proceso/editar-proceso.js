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
import { CrudProcesosProvider } from '../../providers/crud-procesos/crud-procesos';
import { CrudJuzgadoProvider } from '../../providers/crud-juzgado/crud-juzgado';
import { CrudCiudadProvider } from '../../providers/crud-ciudad/crud-ciudad';
import { CrudTipoProcesoProvider } from '../../providers/crud-tipo-proceso/crud-tipo-proceso';
var EditarProcesoPage = /** @class */ (function () {
    function EditarProcesoPage(navCtrl, navParams, _cjp, _ccp, _ctp, _cpp) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cjp = _cjp;
        this._ccp = _ccp;
        this._ctp = _ctp;
        this._cpp = _cpp;
        this.proceso = {};
        this._ccp.ciudadActivas();
        this._ctp.tipoProcesoActivo();
        this.proceso = this.navParams.get("proceso");
        this.id_proceso = this.proceso.proceso_id;
        this.id_ciudad = this.proceso.ciudad_id;
        this.id_tipo_proceso = this.proceso.tipo_proceso_id;
        this._cjp.obtenerJuzgadosActivos(this.id_ciudad);
        this.id_juzgado = this.proceso.juzgado_id;
        this.
            if(this.proceso.estadoProceso === 'INACTIVO');
        {
            this.estado = false;
        }
        {
            this.estado = true;
        }
    }
    EditarProcesoPage.prototype.onSelectChange = function (selectedValue) {
        this._cjp.obtenerJuzgadosActivos(selectedValue);
    };
    EditarProcesoPage = __decorate([
        Component({
            selector: 'page-editar-proceso',
            templateUrl: 'editar-proceso.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CrudJuzgadoProvider,
            CrudCiudadProvider,
            CrudTipoProcesoProvider,
            CrudProcesosProvider])
    ], EditarProcesoPage);
    return EditarProcesoPage;
}());
export { EditarProcesoPage };
//# sourceMappingURL=editar-proceso.js.map