var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, ContentChild, Directive, Component, Input, Output, ViewChildren, EventEmitter, QueryList, ContentChildren, trigger, state, animate, transition, style } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '../core';
import { MdIconModule, MdIconRegistry } from '../icon/icon';
import { MdProgressCircleModule } from '../progress-circle/progress-circle';
import { MdStepLabel } from './step-label';
import { MdStepContent } from './step-content';
import { MdStepNav } from './step-nav';
import { MdStepLabelWrapper } from './step-label-wrapper';
import { MdStepContentWrapper } from './step-content-wrapper';
import { MdStepNavWrapper } from './step-nav-wrapper';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { RIGHT_ARROW, LEFT_ARROW, ENTER } from '../core';
/** Used to generate unique ID's for each stepper component */
var nextId = 0;
/** A simple change event emitted on focus or selection changes. */
export var MdStepChangeEvent = (function () {
    function MdStepChangeEvent() {
    }
    return MdStepChangeEvent;
}());
export var MdStep = (function () {
    function MdStep() {
        /**
         * Step active setting, if step is active set to true.
         * TODO: internal
         * Note: Look into changing the way active is currently unset and set.
         */
        this._active = false;
        /** Step editable setting. */
        this._editable = true;
        /** Step valid setting. */
        this._valid = true;
        /**
         * Step optional setting, can be skipped.
         * TODO: internal
         * Note: Needs completing.
         */
        this._optional = false;
        /**
         * Step saving after event save for step.
         * TODO: internal
         * Note: Needs completing.
         */
        this._saving = false;
        /**
         * Step transient feedback true or false.
         * TODO: internal
         * Note: Needs completing.
         */
        this._feedback = false;
        /**
         * Step warning true or false.
         * TODO: internal
         * Note: Needs completing.
         */
        this._warning = false;
        /** Step completed setting, if step is complete set to true. */
        this._completed = false;
    }
    Object.defineProperty(MdStep.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (value) {
            this._active = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStep.prototype, "editable", {
        get: function () {
            return this._editable;
        },
        set: function (value) {
            this._editable = (value != null && "" + value !== 'false');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStep.prototype, "valid", {
        get: function () {
            return this._valid;
        },
        set: function (value) {
            this._valid = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStep.prototype, "optional", {
        get: function () {
            return this._optional;
        },
        set: function (value) {
            this._optional = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStep.prototype, "saving", {
        get: function () {
            return this._saving;
        },
        set: function (value) {
            this._saving = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStep.prototype, "feedback", {
        get: function () {
            return this._feedback;
        },
        set: function (value) {
            this._feedback = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStep.prototype, "feedbackMessage", {
        get: function () {
            return this._feedbackMessage;
        },
        set: function (value) {
            this._feedbackMessage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStep.prototype, "warning", {
        get: function () {
            return this._warning;
        },
        set: function (value) {
            this._warning = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStep.prototype, "warningMessage", {
        get: function () {
            return this._warningMessage;
        },
        set: function (value) {
            this._warningMessage = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStep.prototype, "completed", {
        get: function () {
            return this._completed;
        },
        set: function (value) {
            this._completed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStep.prototype, "isTargetable", {
        /** Step valid setting. */
        get: function () {
            return !this.editable && this.completed ? false : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStep.prototype, "_stepperIconLigature", {
        /** Step icon */
        get: function () {
            return (!this.active && this.completed) ? 'done' : 'create';
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        ContentChild(MdStepLabel), 
        __metadata('design:type', MdStepLabel)
    ], MdStep.prototype, "label", void 0);
    __decorate([
        ContentChild(MdStepContent), 
        __metadata('design:type', MdStepContent)
    ], MdStep.prototype, "content", void 0);
    __decorate([
        ContentChild(MdStepNav), 
        __metadata('design:type', MdStepNav)
    ], MdStep.prototype, "nav", void 0);
    __decorate([
        Input('active'), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], MdStep.prototype, "active", null);
    __decorate([
        Input('editable'), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], MdStep.prototype, "editable", null);
    __decorate([
        Input('valid'), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], MdStep.prototype, "valid", null);
    __decorate([
        Input('optional'), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], MdStep.prototype, "optional", null);
    __decorate([
        Input('saving'), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], MdStep.prototype, "saving", null);
    __decorate([
        Input('feedback'), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], MdStep.prototype, "feedback", null);
    __decorate([
        Input('feedbackMessage'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], MdStep.prototype, "feedbackMessage", null);
    __decorate([
        Input('warning'), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], MdStep.prototype, "warning", null);
    __decorate([
        Input('warningMessage'), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], MdStep.prototype, "warningMessage", null);
    __decorate([
        Input('completed'), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], MdStep.prototype, "completed", null);
    MdStep = __decorate([
        Directive({
            selector: 'md-step'
        }), 
        __metadata('design:paramtypes', [])
    ], MdStep);
    return MdStep;
}());
/**
 * Material design stepper component.  Supports basic step (label + content + nav) and includes
 * keyboard navigation, and screen reader.
 * See: https://www.google.com/design/spec/components/steppers.html
 */
export var MdStepper = (function () {
    function MdStepper() {
        this._isInitialized = false;
        this._focusIndex = 0;
        /** Stepper mode can be nonlinear or linear.
         * TODO: internal
         * Node: This has not been fully implemented and needs to be finished.
         */
        this._mode = 'nonlinear';
        /** Stepper orientation can be horizontal or vertical.
         * TODO: internal
         * Node: This has not been fully implemented and needs to be finished.
         */
        this._orientation = 'horizontal';
        /** Output to enable support for two-way binding on `mode`. */
        this._onModeChange = new EventEmitter();
        /** Output to enable support for two-way binding on `orientation`. */
        this._onOrientationChange = new EventEmitter();
        /** Stepper selected step index. */
        this._selectedIndex = 0;
        this._onFocusChange = new EventEmitter();
        this._onSelectChange = new EventEmitter();
        this._stepperId = nextId++;
    }
    Object.defineProperty(MdStepper.prototype, "mode", {
        get: function () {
            return this._mode;
        },
        set: function (value) {
            this._mode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStepper.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (value) {
            this._orientation = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStepper.prototype, "modeChange", {
        get: function () {
            return this._onModeChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStepper.prototype, "orientationChange", {
        get: function () {
            return this._onOrientationChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStepper.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (value) {
            if (value != this._selectedIndex && this.isValidIndex(value)) {
                this._selectedIndex = value;
                if (this._isInitialized) {
                    this._onSelectChange.emit(this._createChangeEvent(value));
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStepper.prototype, "selectedStep", {
        get: function () {
            return this._steps.toArray()[this.selectedIndex];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Determines if an index is valid.  If the steps are not ready yet, we assume that the user is
     * providing a valid index and return true.
     */
    MdStepper.prototype.isValidIndex = function (index) {
        if (this._steps) {
            console.warn('Mode ' + this.mode);
            if (this.mode === 'linear') {
                var step = this._steps.toArray()[index];
                return step.isTargetable;
            }
            return true;
        }
        else {
            return true;
        }
    };
    Object.defineProperty(MdStepper.prototype, "_selectedIndexChange", {
        /** Output to enable support for two-way binding on `selectedIndex`. */
        get: function () {
            return this.selectChange.map(function (event) { return event.index; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStepper.prototype, "focusChange", {
        get: function () {
            return this._onFocusChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStepper.prototype, "selectChange", {
        get: function () {
            return this._onSelectChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    MdStepper.prototype.ngAfterViewChecked = function () {
        this._isInitialized = true;
    };
    Object.defineProperty(MdStepper.prototype, "_currentLabelWrapper", {
        /**
         * Reference to the current label wrapper; defaults to null for initial render before the
         * ViewChildren references are ready.
         */
        get: function () {
            return this._labelWrappers && this._labelWrappers.length
                ? this._labelWrappers.toArray()[this.selectedIndex].elementRef.nativeElement
                : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdStepper.prototype, "focusIndex", {
        /** Tracks which element has focus; used for keyboard navigation */
        get: function () {
            return this._focusIndex;
        },
        /** When the focus index is set, we must manually send focus to the correct label */
        set: function (value) {
            if (this.isValidIndex(value)) {
                this._focusIndex = value;
                if (this._isInitialized) {
                    this._onFocusChange.emit(this._createChangeEvent(value));
                }
                if (this._labelWrappers && this._labelWrappers.length) {
                    this._labelWrappers.toArray()[value].focus();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    MdStepper.prototype._createChangeEvent = function (index) {
        var event = new MdStepChangeEvent;
        event.index = index;
        if (this._steps && this._steps.length) {
            event.step = this._steps.toArray()[index];
        }
        return event;
    };
    /** Returns a class name with a unique id for each step element */
    MdStepper.prototype._getStepId = function (value, index) {
        return "md-step-" + value + "-" + this._stepperId + "-" + index;
    };
    /** Stepper keyboard events for navigating steps */
    MdStepper.prototype.handleKeydown = function (event) {
        switch (event.keyCode) {
            case RIGHT_ARROW:
                this.nextStep(false);
                break;
            case LEFT_ARROW:
                this.previousStep(false);
                break;
            case ENTER:
                this.selectStep(this.focusIndex);
                break;
        }
    };
    /**
     * Moves the focus or selected left or right depending on the offset provided and if it should be selected.
     * Valid offsets are 1 and -1.
     * Valid select are true and false.
     */
    MdStepper.prototype.moveStep = function (offset, select) {
        if (select === void 0) { select = true; }
        if (this._labelWrappers) {
            this.focusIndex = this.selectedIndex;
            var steps = this._steps.toArray();
            for (var i = this.focusIndex + offset; i < steps.length && i >= 0; i += offset) {
                if (this.isValidIndex(i)) {
                    if (select) {
                        this.selectStep(i);
                    }
                    else {
                        this.focusIndex = i;
                    }
                    return;
                }
            }
        }
    };
    /**
     * Selects the step with the index provided.
     * TODO: internal
     * Note: Improve checks and also change the way active is unset and set.
     */
    MdStepper.prototype.selectStep = function (index) {
        this.selectedStep.completed = this.selectedStep.valid ? true : false;
        if (this.mode === 'linear') {
            if (!this.selectedStep.valid && index >= this.selectedIndex) {
                return;
            }
            if (!this.beforeCompleted(index)) {
                return;
            }
        }
        var steps = this._steps.toArray();
        //if (this.mode === 'linear') {
        if (steps[index].completed && !steps[index].editable) {
            return;
        }
        //}
        steps[this.selectedIndex].active = false;
        this.selectedIndex = this.focusIndex = index;
        steps[this.selectedIndex].active = true;
    };
    /** Increment the step index by 1 until a valid step is found. */
    MdStepper.prototype.nextStep = function (select) {
        if (select === void 0) { select = true; }
        this.moveStep(1, select);
    };
    /** Decrement the step index by 1 until a valid step is found. */
    MdStepper.prototype.previousStep = function (select) {
        if (select === void 0) { select = true; }
        this.moveStep(-1, select);
    };
    /** Check if all steps are completed before a specific step */
    MdStepper.prototype.beforeCompleted = function (index) {
        var steps = this._steps.toArray();
        for (var i = this.selectedIndex; i < index; i++) {
            if (!steps[i].completed && !steps[i].optional) {
                return false;
            }
        }
        return true;
    };
    /**
     * To disable step if they are not targetable
     * TODO: internal
     * Note: This has not been started but will disable the step, add class md-step-disabled.
     */
    MdStepper.prototype._isStepDisabled = function (index) {
        /** All steps on a non-linear stepper shouldn't be disabled. */
        if (this.mode === 'nonlinear') {
            return false;
        }
        /** Some logic to see if the specific step is targetable */
        return false;
    };
    __decorate([
        ContentChildren(MdStep), 
        __metadata('design:type', QueryList)
    ], MdStepper.prototype, "_steps", void 0);
    __decorate([
        ViewChildren(MdStepLabelWrapper), 
        __metadata('design:type', QueryList)
    ], MdStepper.prototype, "_labelWrappers", void 0);
    __decorate([
        Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], MdStepper.prototype, "mode", null);
    __decorate([
        Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], MdStepper.prototype, "orientation", null);
    __decorate([
        Output('modeChange'), 
        __metadata('design:type', Observable)
    ], MdStepper.prototype, "modeChange", null);
    __decorate([
        Output('orientationChange'), 
        __metadata('design:type', Observable)
    ], MdStepper.prototype, "orientationChange", null);
    __decorate([
        Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], MdStepper.prototype, "selectedIndex", null);
    __decorate([
        Output('selectedIndexChange'), 
        __metadata('design:type', Observable)
    ], MdStepper.prototype, "_selectedIndexChange", null);
    __decorate([
        Output('focusChange'), 
        __metadata('design:type', Observable)
    ], MdStepper.prototype, "focusChange", null);
    __decorate([
        Output('selectChange'), 
        __metadata('design:type', Observable)
    ], MdStepper.prototype, "selectChange", null);
    MdStepper = __decorate([
        Component({selector: 'md-stepper',
            template: "<div class=\"md-stepper\" [class.md-stepper-horizontal]=\"orientation == 'horizontal'\" [class.md-stepper-vertical]=\"orientation == 'vertical'\" [class.md-stepper-alternative]=\"false\"> <div class=\"md-steps-wrapper\" role=\"steplist\" (keydown)=\"handleKeydown($event)\"> <div class=\"md-step-transient-feedback\" [@fadeInOut]=\"\" *ngIf=\"selectedStep.feedback && orientation=='horizontal'\"> <span [@fadeUpDown]=\"\">{{selectedStep.feedbackMessage}}</span> </div> <div class=\"md-step-wrapper\" role=\"step\" md-step-label-wrapper *ngFor=\"let step of _steps; let i = index\" [id]=\"_getStepId('label', i)\" [tabIndex]=\"selectedIndex == i ? 0 : -1\" [attr.aria-controls]=\"_getStepId('content', i)\" [attr.aria-selected]=\"selectedIndex == i\" [class.md-step-active]=\"selectedIndex == i || step.completed\" [class.md-step-completed]=\"step.completed\" [class.md-step-disabled]=\"_isStepDisabled(i)\" (click)=\"selectStep(i)\" [class.md-step-warning]=\"step.warning\" [class.md-step-feedback]=\"step.feedback\"> <div class=\"md-step-item-wrapper\"> <div class=\"md-step-transient-feedback\" [@fadeInOut]=\"\" *ngIf=\"selectedStep.feedback && orientation=='vertical' && selectedIndex == i\"> <span [@fadeUpDown]=\"\">{{selectedStep.feedbackMessage}}</span> </div> <div class=\"md-step-icon\"> <md-icon class=\"text-roboto\" *ngIf=\"!step.completed && !step.warning\">{{ i+1 }}</md-icon> <md-icon *ngIf=\"!step.warning && step.completed\">{{step._stepperIconLigature}}</md-icon> <md-icon *ngIf=\"step.warning\">warning</md-icon> </div> <div class=\"md-step-label\"> <span class=\"md-step-title\" [class.md-step-active]=\"selectedIndex == i || step.completed\"> <template [portalHost]=\"step.label\"></template> </span> <!-- <span class=\"md-step-optional\">Editable: {{step.editable}}</span> <br> <span class=\"md-step-optional\">Valid: {{step.valid}}</span> <br> <span class=\"md-step-optional\">Completed: {{step.completed}}</span> --> <span *ngIf=\"step.optional\" class=\"md-step-optional\">Optional</span> <span *ngIf=\"step.warning\" class=\"md-step-optional\">{{step.warningMessage}}</span> </div> </div> <!-- Wrapped in template to stop animation leaking into the horizontal mode when switched --> <template [ngIf]=\"orientation=='vertical'\"> <div class=\"md-step-content-wrapper\" [@heightUpDown]=\"\" *ngIf=\"selectedIndex == i\"> <div class=\"md-step-body\" role=\"steppanel\" [id]=\"_getStepId('content', i)\" [class.md-step-active]=\"selectedIndex == i\" [attr.aria-labelledby]=\"_getStepId('label', i)\"> <div class=\"md-step-transient-overlay\" [@fadeInOut]=\"\" *ngIf=\"selectedStep.saving\"> <md-progress-circle class=\"md-step-progress\" mode=\"indeterminate\"></md-progress-circle> </div> <template [portalHost]=\"step.content\"></template> </div> <div class=\"md-step-nav\" role=\"stepnav\" [id]=\"_getStepId('nav', i)\" [class.md-step-active]=\"selectedIndex == i\"> <template [portalHost]=\"step.nav\"></template> </div> </div> </template> <!-- <div class=\"md-step-nav-wrapper\" *ngIf=\"orientation=='vertical' && selectedIndex == i\"> <div class=\"md-step-nav\" role=\"stepnav\" [id]=\"_getStepId('nav', i)\" [class.md-step-active]=\"selectedIndex == i\"> <template [portalHost]=\"step.nav\"></template> </div> </div> --> </div> </div> <template [ngIf]=\"orientation=='horizontal'\"> <template ngFor let-step [ngForOf]=\"_steps\" let-i=\"index\"> <div class=\"md-step-content-wrapper\" role=\"steppanel\" [id]=\"_getStepId('content', i)\" [class.md-step-active]=\"selectedIndex == i\" [attr.aria-labelledby]=\"_getStepId('label', i)\" *ngIf=\"selectedIndex == i\"> <div class=\"md-step-transient-overlay\" [@fadeInOut]=\"\" *ngIf=\"selectedStep.saving\"> <md-progress-circle class=\"md-step-progress\" mode=\"indeterminate\"></md-progress-circle> </div> <div class=\"md-step-body\"> <template [portalHost]=\"step.content\"></template> </div> </div> </template> <template ngFor let-step [ngForOf]=\"_steps\" let-i=\"index\"> <div class=\"md-step-nav-wrapper\" role=\"stepnav\" [id]=\"_getStepId('nav', i)\" [class.md-step-active]=\"selectedIndex == i\" *ngIf=\"selectedIndex == i\"> <div class=\"md-step-nav\"> <template [portalHost]=\"step.nav\"></template> </div> </div> </template> </template> </div>",
            styles: [".md-step-horizontal-old :host { display: flex; flex-direction: column; font-family: Roboto, \"Helvetica Neue\", sans-serif; } .md-step-horizontal-old .md-step-header { overflow: hidden; position: relative; display: flex; flex-direction: row; flex-shrink: 0; } .md-step-horizontal-old .md-step-label { /* line-height: $md-step-bar-height; height: $md-step-bar-height; padding: 0 12px; font-size: $md-body-font-size-base; font-family: $md-font-family; font-weight: 500; cursor: pointer; box-sizing: border-box; color: currentColor; opacity: 0.6; min-width: 160px; text-align: center; */ } .md-step-horizontal-old .md-step-label:focus { outline: none; opacity: 1; background-color: rgba(1, 1, 1, 0.1); } .md-step-horizontal-old .md-step-disabled { cursor: default; pointer-events: none; } .md-step-horizontal-old .md-step-body-wrapper { position: relative; overflow: hidden; flex-grow: 1; display: flex; } .md-step-horizontal-old .md-step-body { display: none; overflow: auto; box-sizing: border-box; flex-grow: 1; flex-shrink: 1; } .md-step-horizontal-old .md-step-body.md-step-active { display: block; } .md-step-horizontal-old .md-step-header { position: relative; overflow: hidden; height: 72px; display: block; box-shadow: 0 2px 2px rgba(0, 0, 0, 0.38); } .md-step-horizontal-old .md-steps { display: flex; min-width: 100%; align-content: stretch; } .md-step-horizontal-old .md-stepper-item-container { display: flex; cursor: pointer; } .md-step-horizontal-old .md-step { display: inline-flex; flex-basis: 100%; } .md-step-horizontal-old .md-step::before { background: rgba(0, 0, 0, 0.38); display: inline-flex; height: 1px; content: ''; flex-grow: 1; align-self: center; } .md-step-horizontal-old .md-step:first-child::before { background: transparent; } .md-step-horizontal-old .md-step::after { background: rgba(0, 0, 0, 0.38); display: inline-flex; height: 1px; content: ''; flex-grow: 1; align-self: center; } .md-step-horizontal-old .md-step:last-child::after { background: transparent; } .md-step-horizontal-old .md-stepper-circle-container { padding: 24px 8px 24px 24px; } .md-step-horizontal-old .md-step-icon { display: block; font-size: 12px; background: rgba(0, 0, 0, 0.38); width: 24px; height: 24px; color: white; background-clip: content-box; border-radius: 50%; text-align: center; line-height: 24px; } .md-step-horizontal-old .md-step-icon.md-step-active { background-color: #ff98a7; } .md-step-horizontal-old .md-step-icon md-icon { font-size: 16px; line-height: 24px; } .md-step-horizontal-old .md-step-label { padding-right: 8px; align-self: center; } .md-step-horizontal-old .md-step-title { font-size: 14px; } .md-step-horizontal-old .md-step-title.md-step-active { font-weight: bold; } .md-step-horizontal-old .md-step-optional { align-self: center; font-size: 10px; color: rgba(0, 0, 0, 0.54); } .md-stepper { position: relative; font-family: \"Roboto\",sans-serif; background-color: white; display: block; box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); width: 100%; border-radius: 2px; overflow: hidden; } .text-roboto { font-family: Roboto, 'Helvetica Neue', sans-serif !important; } .md-steps-wrapper { position: relative; display: flex; max-height: 72px; justify-content: space-between; box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.38); } .md-steps-wrapper::after { content: ''; position: absolute; flex: 1; top: 36px; width: 100%; height: 1px; background-color: rgba(0, 0, 0, 0.1); z-index: 0; } .md-step-wrapper { background: #FFF; display: flex; z-index: 1; } .md-step-wrapper:focus, .md-step-wrapper:hover, .md-step-wrapper.md-step-active, .md-step-wrapper.md-step-completed { outline: none; opacity: 1; } .md-step-wrapper.md-step-active .md-step-icon .material-icons, .md-step-wrapper.md-step-completed .md-step-icon .material-icons { background: #4285f4; } .md-step-wrapper.md-step-active .md-step-title, .md-step-wrapper.md-step-completed .md-step-title { font-weight: bold; } .md-step-wrapper:focus, .md-step-wrapper:hover { background: #f6f6f6; } /** * The reason the step container has a child element for the step is for the vertical option * when the step content and nav is placed inside the step itself. */ .md-step-item-wrapper { display: flex; padding: 24px; background: #FFF; z-index: 1; } .md-step-feedback { opacity: 1; } .md-step-transient-feedback { background-color: #FFF; position: absolute; top: 0; left: 0; right: 0; display: flex; align-items: center; padding-left: 24px; height: 72px; cursor: default; z-index: 2; } .md-step-icon { display: flex; padding-right: 5px; } .md-step-icon .material-icons { display: flex; width: 24px; height: 24px; line-height: 24px; justify-content: center; font-size: 15px; background-color: rgba(0, 0, 0, 0.3); border-radius: 100%; color: #FFF; } .md-step-label { display: flex; justify-content: center; flex-flow: column nowrap; padding-right: 8px; padding-top: 1px; } .md-step-title { font-size: 14px; } .md-step-optional { font-size: 12px; } .md-step-warning { opacity: 1; } .md-step-warning .material-icons { background: transparent !important; font-size: 24px; line-height: 24px; color: #f44336; } .md-step-warning .md-step-label { margin-top: -4px; } .md-step-warning .md-step-label, .md-step-warning .md-step-title, .md-step-warning .md-step-optional { color: #f44336 !important; } .md-step-content-wrapper { position: relative; } .md-step-transient-overlay { position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: rgba(255, 255, 255, 0.6); display: flex; align-items: center; justify-content: center; z-index: 99; } .md-step-transient-overlay .md-step-progress { width: 50px; height: 50px; } .md-step-body { padding: 24px; } .md-step-nav-wrapper { padding: 24px; } .md-stepper-vertical .md-steps-wrapper { max-height: none; flex-direction: column; } .md-stepper-vertical .md-steps-wrapper::after { background: transparent; } .md-stepper-vertical .md-step-wrapper { flex-direction: column; } .md-stepper-vertical .md-step-wrapper:focus, .md-stepper-vertical .md-step-wrapper:hover { background: transparent; } .md-stepper-vertical .md-step-item-wrapper { position: relative; height: 64px; padding: 24px 24px 16px 24px; overflow: hidden; box-sizing: border-box; } .md-stepper-vertical .md-step-item-wrapper:hover { background: #f6f6f6; } .md-stepper-vertical .md-step-icon { padding-right: 12px; } .md-stepper-vertical .md-step-transient-feedback { height: 64px; } .md-stepper-vertical .md-step-content-wrapper, .md-stepper-vertical .md-step-nav-wrapper { background: #FFF; } .md-stepper-vertical .md-step-body { position: relative; padding: 0 60px 16px 60px; } .md-stepper-vertical .md-step-nav { padding: 6px 60px; margin-bottom: 18px; } .md-stepper-vertical .md-step-warning .md-step-label { padding-top: 20px; } .md-stepper-vertical-old .md-stepper { font-family: \"Roboto\",sans-serif; } .md-stepper-vertical-old .md-steps { position: relative; font-family: \"Roboto\",sans-serif; background-color: white; display: block; box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); padding: 24px 0; max-width: 720px; width: 100%; border-radius: 2px; } .md-stepper-vertical-old .md-step { position: relative; display: list-item; list-style: none; } .md-stepper-vertical-old .md-step:not(.md-step-active) { height: initial !important; } .md-stepper-vertical-old .md-step:not(:last-child):after { content: ''; position: absolute; top: 50px; left: 37px; width: 1px; height: calc(100% - 24px); background-color: rgba(0, 0, 0, 0.1); } .md-stepper-vertical-old .md-step-item-container { display: flex; cursor: pointer; padding: 24px 24px 24px 24px; align-items: center; } .md-stepper-vertical-old .md-step-item-container:hover { background-color: #f0f6f0; } .md-stepper-vertical-old .md-step-transient-feedback { background-color: #FFF; position: absolute; top: 0; left: 0; right: 0; display: flex; align-items: center; padding-left: 24px; height: 72px; cursor: default; } .md-stepper-vertical-old .md-step-icon { -webkit-display: flex; -moz-display: flex; -ms-display: flex; display: flex; order: 1; background-color: rgba(0, 0, 0, 0.3); border-radius: 100%; color: white; margin-right: 12px; margin-bottom: auto; } .md-stepper-vertical-old .md-step-icon > :first-child { -webkit-display: flex; -moz-display: flex; -ms-display: flex; display: flex; font-size: 15px; width: 24px; height: 24px; align-items: center; justify-content: center; } .md-stepper-vertical-old .md-step-icon.md-step-active { background-color: #ff98a7; } .md-stepper-vertical-old .md-step-icon md-icon { font-size: 16px; line-height: 24px; } .md-stepper-vertical-old .md-step-label { -webkit-display: flex; -moz-display: flex; -ms-display: flex; display: flex; order: 2; width: 100%; } .md-stepper-vertical-old .md-step-title { font-size: 14px; line-height: 28px; } .md-stepper-vertical-old .md-step-title.md-step-active { font-weight: bold; } .md-stepper-vertical-old .md-step-optional { align-self: center; font-size: 10px; color: rgba(0, 0, 0, 0.54); } .md-stepper-vertical-old .md-step-body-wrapper { margin-left: 64px; } .md-stepper-vertical-old .md-step-nav-wrapper { margin-left: 64px; } /*# sourceMappingURL=stepper.css.map */ "],
            animations: [
                trigger('fadeInOut', [
                    state('void', style({ opacity: 0 })),
                    transition('void => *', [
                        style({
                            opacity: 0,
                        }),
                        animate('0.2s ease')
                    ]),
                    transition('* => void', [
                        style({
                            opacity: 1,
                        }),
                        animate('0.2s ease')
                    ])
                ]),
                trigger('fadeUpDown', [
                    state('void', style({ opacity: 1, transform: 'translateY(0)' })),
                    transition('void => *', [
                        style({
                            transform: 'translateY(100%)'
                        }),
                        animate(250)
                    ]),
                    transition('* => void', [
                        style({
                            transform: 'translateY(0)'
                        }),
                        animate(250, style({ transform: 'translateY(100%)' }))
                    ])
                ]),
                trigger('heightUpDown', [
                    //state('void', style({height: '*'})),
                    transition('void => *', [
                        style({
                            height: 0
                        }),
                        animate(250, style({ height: '*' }))
                    ]),
                    transition('* => void', [
                        style({
                            height: '*'
                        }),
                        animate(250, style({ height: 0 }))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MdStepper);
    return MdStepper;
}());
export var MdStepperModule = (function () {
    function MdStepperModule() {
    }
    MdStepperModule.forRoot = function () {
        return {
            ngModule: MdStepperModule,
            providers: [MdIconRegistry]
        };
    };
    MdStepperModule = __decorate([
        NgModule({
            imports: [CommonModule, PortalModule, MdIconModule, MdProgressCircleModule],
            exports: [MdStepper, MdStepLabel, MdStepContent, MdStepNav, MdStep],
            declarations: [MdStepper, MdStepLabel, MdStepContent, MdStepNav, MdStep, MdStepLabelWrapper, MdStepContentWrapper, MdStepNavWrapper],
        }), 
        __metadata('design:paramtypes', [])
    ], MdStepperModule);
    return MdStepperModule;
}());

//# sourceMappingURL=stepper.js.map
