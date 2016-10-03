"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var material_1 = require('@angular/material');
var SnackBarDemo = (function () {
    function SnackBarDemo(snackBar, viewContainerRef) {
        this.snackBar = snackBar;
        this.viewContainerRef = viewContainerRef;
        this.message = 'Snack Bar opened.';
        this.actionButtonLabel = 'Retry';
        this.action = false;
    }
    SnackBarDemo.prototype.open = function () {
        var config = new material_1.MdSnackBarConfig(this.viewContainerRef);
        this.snackBar.open(this.message, this.action && this.actionButtonLabel, config);
    };
    SnackBarDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'snack-bar-demo',
            templateUrl: 'snack-bar-demo.html',
        }), 
        __metadata('design:paramtypes', [material_1.MdSnackBar, core_1.ViewContainerRef])
    ], SnackBarDemo);
    return SnackBarDemo;
}());
exports.SnackBarDemo = SnackBarDemo;
var DemoSnack = (function () {
    function DemoSnack() {
    }
    DemoSnack = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'demo-snack',
            templateUrl: 'snack-bar-demo.html',
            styleUrls: ['./snack-bar-demo.css'],
        }), 
        __metadata('design:paramtypes', [])
    ], DemoSnack);
    return DemoSnack;
}());
exports.DemoSnack = DemoSnack;

//# sourceMappingURL=snack-bar-demo.js.map
