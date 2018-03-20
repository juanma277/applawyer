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
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { AjustesProvider } from "../../providers/ajustes/ajustes";
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, _ajustes) {
        this.navCtrl = navCtrl;
        this._ajustes = _ajustes;
        this.slides = [
            {
                title: "Bienvenido!!!",
                description: "Esta <b>aplicación</b> nos ayudará a comprender muchos temas interesantes en ionic!",
                image: "assets/img/ica-slidebox-img-1.png",
            },
            {
                title: "¿Qué es ionic?",
                description: "<b>Ionic Framework</b> es un SDK abierto que le permite a los desarrolladores crear aplicaciones móviles de alta calidad con el conocimiento de JavaScript, CSS y HTML.",
                image: "assets/img/ica-slidebox-img-2.png",
            },
            {
                title: "¿Que hace esta app?",
                description: "Esta aplicación nos ayudará a conocer más sobre el ciclo de vida de un componente y el storage!",
                image: "assets/img/ica-slidebox-img-3.png",
            }
        ];
    }
    IntroPage.prototype.saltar_tutorial = function () {
        this._ajustes.ajustes.mostrar_tutorial = false;
        this._ajustes.guardarStorage();
        this.navCtrl.setRoot(HomePage);
    };
    IntroPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-intro',
            templateUrl: 'intro.html',
        }),
        __metadata("design:paramtypes", [NavController,
            AjustesProvider])
    ], IntroPage);
    return IntroPage;
}());
export { IntroPage };
//# sourceMappingURL=intro.js.map