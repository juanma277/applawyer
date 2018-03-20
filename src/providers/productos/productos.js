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
import { URL_SERVICIOS_PRODUCCION } from "../../config/url.servicios";
var ProductosProvider = /** @class */ (function () {
    function ProductosProvider(http) {
        this.http = http;
        this.pagina = 0;
        this.productos = [];
        this.lineas = [];
        this.porCategoria = [];
        this.resultados = [];
        this.cargarTodos();
        this.cargarLineas();
    }
    ProductosProvider.prototype.cargarLineas = function () {
        var _this = this;
        var url = URL_SERVICIOS_PRODUCCION + "lineas";
        this.http.get(url)
            .subscribe(function (data) {
            if (data['error']) {
                // ERROR
            }
            else {
                _this.lineas = data['lineas'];
                console.log(_this.lineas);
            }
        });
    };
    ProductosProvider.prototype.cargarPorCategoria = function (categoria) {
        var _this = this;
        var url = URL_SERVICIOS_PRODUCCION + "productos/por_tipo/" + categoria;
        this.http.get(url).subscribe(function (data) {
            if (data['error']) {
                // ERROR
            }
            else {
                _this.porCategoria = data['Productos'];
                console.log(_this.porCategoria);
            }
        });
    };
    ProductosProvider.prototype.cargarTodos = function () {
        var _this = this;
        var promesa = new Promise(function (resolve, reject) {
            var url = URL_SERVICIOS_PRODUCCION + "productos/todos/" + _this.pagina;
            _this.http.get(url).subscribe(function (res) {
                if (res['error']) {
                    //ERROR
                }
                else {
                    var nuevaData = _this.agrupar(res['Productos'], 2);
                    (_a = _this.productos).push.apply(_a, nuevaData);
                    _this.pagina = _this.pagina + 1;
                }
                resolve();
                var _a;
            });
        });
        return promesa;
    };
    ProductosProvider.prototype.buscarProducto = function (termino) {
        var _this = this;
        var url = URL_SERVICIOS_PRODUCCION + "productos/buscar/" + termino;
        this.http.get(url)
            .subscribe(function (resp) {
            var data = resp;
            _this.resultados = data['Productos'];
        });
    };
    ProductosProvider.prototype.agrupar = function (arr, tamano) {
        var nuevoArreglo = [];
        for (var i = 0; i < arr.length; i += tamano) {
            nuevoArreglo.push(arr.slice(i, i + tamano));
        }
        console.log(nuevoArreglo);
        return nuevoArreglo;
    };
    ProductosProvider = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], ProductosProvider);
    return ProductosProvider;
}());
export { ProductosProvider };
//# sourceMappingURL=productos.js.map