var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { CrudProcesosProvider } from '../../providers/crud-procesos/crud-procesos';
var ReporTipoPage = /** @class */ (function () {
    function ReporTipoPage(navCtrl, navParams, _cpp, loadingCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._cpp = _cpp;
        this.loadingCtrl = loadingCtrl;
        this.data = [];
        this.cantidadProcesos = [];
        this.procesosPorTipo = [];
        this.barChartOptions = {
            scaleShowVerticalLines: true,
            responsive: true
        };
        //Chart Labels
        this.barChartLabels = this.procesosPorTipo;
        this.barChartType = 'bar';
        this.barChartLegend = true;
        //Chart data
        this.barChartData = [
            { data: this.cantidadProcesos, label: 'Procesos' },
        ];
        this.chartColors = [
            {
                backgroundColor: ["#633974", "#F39C12", "#21618C", "#28B463", "#0AFA07", "#02EAF9", "#633974", "#F39C12", "#21618C", "#28B463", "#0AFA07", "#02EAF9"]
            }
        ];
        this.id = this.navParams.get("id");
        var loader = this.loadingCtrl.create({
            content: "Por favor espere...",
        });
        loader.present();
        this._cpp.procesosTipo(this.id).then(function (res) {
            _this.data = _this._cpp.procesosPorTipo;
            for (var _i = 0, _a = _this.data; _i < _a.length; _i++) {
                var lista = _a[_i];
                _this.cantidadProcesos.push(lista['cantidad']);
                _this.procesosPorTipo.push(lista['tipo']);
            }
        });
        loader.dismiss();
    }
    // Chart events
    ReporTipoPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    // Chart events
    ReporTipoPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    __decorate([
        ViewChild('barCanvas'),
        __metadata("design:type", Object)
    ], ReporTipoPage.prototype, "barCanvas", void 0);
    ReporTipoPage = __decorate([
        Component({
            selector: 'page-repor-tipo',
            templateUrl: 'repor-tipo.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            CrudProcesosProvider,
            LoadingController])
    ], ReporTipoPage);
    return ReporTipoPage;
}());
export { ReporTipoPage };
//# sourceMappingURL=repor-tipo.js.map