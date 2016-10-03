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
var Observable_1 = require('rxjs/Observable');
var StepperDemo = (function () {
    function StepperDemo() {
        var _this = this;
        this.steps = [
            { label: 'Step One', content: 'This is the body of the first step' },
            { label: 'Step Two', content: 'This is the body of the second step' },
            { label: 'Step Three', content: 'This is the body of the third step' },
            { label: 'Step Four', content: 'This is the body of the four step' },
            { label: 'Step Five', content: 'This is the body of the five step' },
        ];
        this.mode = 'nonlinear';
        this.orientation = 'horizontal';
        this.validState = { one: false, two: false, three: false, four: false };
        this.savingState = { one: false, two: false, three: false, four: false };
        this.feedbackState = { one: false, two: false, three: false, four: false };
        this.warningState = { one: false, two: false, three: false, four: false };
        this.asyncSteps = Observable_1.Observable.create(function (observer) {
            setTimeout(function () {
                observer.next(_this.steps);
            }, 1000);
        });
    }
    StepperDemo = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'stepper-demo',
            templateUrl: 'stepper-demo.html',
            styleUrls: ['stepper-demo.css'],
            encapsulation: core_1.ViewEncapsulation.None,
        }), 
        __metadata('design:paramtypes', [])
    ], StepperDemo);
    return StepperDemo;
}());
exports.StepperDemo = StepperDemo;

//# sourceMappingURL=stepper-demo.js.map
