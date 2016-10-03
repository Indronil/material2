import {
    NgModule,
    ModuleWithProviders,
    ContentChild,
    Directive,
    Component,
    Input,
    Output,
    ViewChildren,
    NgZone,
    EventEmitter,
    QueryList,
    ContentChildren,

    OnChanges,
    trigger,
    state,
    animate,
    transition,
    style
} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PortalModule} from '../core';
import {MdIconModule, MdIconRegistry} from '../icon/icon';

import {MdProgressCircleModule} from '../progress-circle/progress-circle';

import {MdStepLabel} from './step-label';
import {MdStepContent} from './step-content';
import {MdStepNav} from './step-nav';

import {MdStepLabelWrapper} from './step-label-wrapper';
import {MdStepContentWrapper} from './step-content-wrapper';
import {MdStepNavWrapper} from './step-nav-wrapper';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {RIGHT_ARROW, LEFT_ARROW, ENTER} from '../core';

/** Used to generate unique ID's for each stepper component */
let nextId = 0;

/** A simple change event emitted on focus or selection changes. */
export class MdStepChangeEvent {
    index: number;
    step: MdStep;
}

@Directive({
    selector: 'md-step'
})
export class MdStep {
    @ContentChild(MdStepLabel) label: MdStepLabel;
    @ContentChild(MdStepContent) content: MdStepContent;
    @ContentChild(MdStepNav) nav: MdStepNav;

    /**
     * Step active setting, if step is active set to true.
     * TODO: internal
     * Note: Look into changing the way active is currently unset and set.
     */
    private _active = false;
    @Input('active')
    set active(value: boolean) {
        this._active = value;
    }
    get active(): boolean {
        return this._active;
    }

    /** Step editable setting. */
    private _editable = true;
    @Input('editable')
    set editable(value: boolean) {
        this._editable = (value != null && `${value}` !== 'false');
    }
    get editable(): boolean {
        return this._editable;
    }

    /** Step valid setting. */
    private _valid = true;
    @Input('valid')
    set valid(value: boolean) {
        this._valid = value;
    }
    get valid(): boolean {
        return this._valid;
    }

    /**
     * Step optional setting, can be skipped.
     * TODO: internal
     * Note: Needs completing.
     */
    private _optional = false;
    @Input('optional')
    set optional(value: boolean) {
        this._optional = value;
    }
    get optional(): boolean {
        return this._optional;
    }

    /**
     * Step saving after event save for step.
     * TODO: internal
     * Note: Needs completing.
     */
    private _saving = false;
    @Input('saving')
    set saving(value: boolean) {
        this._saving = value;
    }
    get saving(): boolean {
        return this._saving;
    }

    /**
     * Step transient feedback true or false.
     * TODO: internal
     * Note: Needs completing.
     */
    private _feedback: boolean = false;
    @Input('feedback')
    set feedback(value: boolean) {
        this._feedback = value;
    }
    get feedback(): boolean {
        return this._feedback;
    }

    /**
     * Step transient feedback message.
     * TODO: internal
     * Note: Needs completing.
     */
    private _feedbackMessage: string;
    @Input('feedbackMessage')
    set feedbackMessage(value: string) {
        this._feedbackMessage = value;
    }
    get feedbackMessage(): string {
        return this._feedbackMessage;
    }

    /**
     * Step warning true or false.
     * TODO: internal
     * Note: Needs completing.
     */
    private _warning: boolean = false;
    @Input('warning')
    set warning(value: boolean) {
        this._warning = value;
    }
    get warning(): boolean {
        return this._warning;
    }

    /**
     * Step warning message.
     * TODO: internal
     * Note: Needs completing.
     */
    private _warningMessage: string;
    @Input('warningMessage')
    set warningMessage(value: string) {
        this._warningMessage = value;
    }
    get warningMessage(): string {
        return this._warningMessage;
    }

    /** Step completed setting, if step is complete set to true. */
    private _completed = false;
    @Input('completed')
    set completed(value: boolean) {
        this._completed = value;
    }
    get completed(): boolean {
        return this._completed;
    }

    /** Step valid setting. */
    get isTargetable(): boolean {
        return !this.editable && this.completed ? false : true;
    }

    /** Step icon */
    private get _stepperIconLigature(): string {
        return (!this.active && this.completed) ? 'done' : 'create';
    }
}









/**
 * Material design stepper component.  Supports basic step (label + content + nav) and includes
 * keyboard navigation, and screen reader.
 * See: https://www.google.com/design/spec/components/steppers.html
 */
@Component({
    moduleId: module.id,
    selector: 'md-stepper',
    templateUrl: 'stepper.html',
    styleUrls: ['stepper.css'],
    animations: [
        trigger('fadeInOut', [
            state('void', style({opacity: 0})),
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
            state('void', style({opacity: 1, transform: 'translateY(0)'})),
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
                animate(250, style({transform: 'translateY(100%)'}))
            ])
        ]),
        trigger('heightUpDown', [
            //state('void', style({height: '*'})),
            transition('void => *', [
                style({
                    height: 0
                }),
                animate(250, style({height: '*'}))
            ]),
            transition('* => void', [
                style({
                    height: '*'
                }),
                animate(250, style({height: 0}))
            ])
        ])
    ]
})
export class MdStepper {

    @ContentChildren(MdStep) _steps: QueryList<MdStep>;

    @ViewChildren(MdStepLabelWrapper) _labelWrappers: QueryList<MdStepLabelWrapper>;

    private _isInitialized: boolean = false;
    private _focusIndex: number = 0;
    private _stepperId: number;

    /** Stepper mode can be nonlinear or linear.
     * TODO: internal
     * Node: This has not been fully implemented and needs to be finished.
     */
    private _mode: string = 'nonlinear';
    @Input()
    set mode(value: string) {
        this._mode = value;
    }
    get mode(): string {
        return this._mode;
    }

    /** Stepper orientation can be horizontal or vertical.
     * TODO: internal
     * Node: This has not been fully implemented and needs to be finished.
     */
    private _orientation: string = 'horizontal';
    @Input()
    set orientation(value: string) {
        this._orientation = value;
    }
    get orientation(): string {
        return this._orientation;
    }

    /** Output to enable support for two-way binding on `mode`. */
    private _onModeChange: EventEmitter<String> = new EventEmitter<String>();
    @Output('modeChange') get modeChange(): Observable<any> {
        return this._onModeChange.asObservable();
    }

    /** Output to enable support for two-way binding on `orientation`. */
    private _onOrientationChange: EventEmitter<String> = new EventEmitter<String>();
    @Output('orientationChange') get orientationChange(): Observable<any> {
        return this._onOrientationChange.asObservable();
    }



    /** Stepper selected step index. */
    private _selectedIndex: number = 0;
    @Input()
    set selectedIndex(value: number) {
        if (value != this._selectedIndex && this.isValidIndex(value)) {
            this._selectedIndex = value;

            if (this._isInitialized) {
                this._onSelectChange.emit(this._createChangeEvent(value));
            }
        }
    }
    get selectedIndex(): number {
        return this._selectedIndex;
    }

    get selectedStep(): MdStep {
        return (<any>this._steps).toArray()[this.selectedIndex];
    }

    /**
     * Determines if an index is valid.  If the steps are not ready yet, we assume that the user is
     * providing a valid index and return true.
     */
    isValidIndex(index: number): boolean {
        if (this._steps) {
            console.warn( 'Mode ' + this.mode );
            if (this.mode === 'linear') {

                const step = this._steps.toArray()[index];
                return step.isTargetable;
            }
            return true;
            //return step && !step.completed || step && step.completed && step.editable;
        } else {
            return true;
        }
    }

    /** Output to enable support for two-way binding on `selectedIndex`. */
    @Output('selectedIndexChange') private get _selectedIndexChange(): Observable<number> {
        return this.selectChange.map(event => event.index);
    }

    private _onFocusChange: EventEmitter<MdStepChangeEvent> = new EventEmitter<MdStepChangeEvent>();
    @Output('focusChange') get focusChange(): Observable<MdStepChangeEvent> {
        return this._onFocusChange.asObservable();
    }

    private _onSelectChange: EventEmitter<MdStepChangeEvent> = new EventEmitter<MdStepChangeEvent>();
    @Output('selectChange') get selectChange(): Observable<MdStepChangeEvent> {
        return this._onSelectChange.asObservable();
    }


    constructor() {
        this._stepperId = nextId++;
    }


    ngAfterViewChecked(): void {
        this._isInitialized = true;
    }


    /**
     * Reference to the current label wrapper; defaults to null for initial render before the
     * ViewChildren references are ready.
     */
    private get _currentLabelWrapper(): HTMLElement {
        return this._labelWrappers && this._labelWrappers.length
            ? this._labelWrappers.toArray()[this.selectedIndex].elementRef.nativeElement
            : null;
    }

    /** Tracks which element has focus; used for keyboard navigation */
    get focusIndex(): number {
        return this._focusIndex;
    }

    /** When the focus index is set, we must manually send focus to the correct label */
    set focusIndex(value: number) {
        if (this.isValidIndex(value)) {
            this._focusIndex = value;

            if (this._isInitialized) {
                this._onFocusChange.emit(this._createChangeEvent(value));
            }

            if (this._labelWrappers && this._labelWrappers.length) {
                this._labelWrappers.toArray()[value].focus();
            }
        }
    }


    private _createChangeEvent(index: number): MdStepChangeEvent {
        const event = new MdStepChangeEvent;
        event.index = index;
        if (this._steps && this._steps.length) {
            event.step = this._steps.toArray()[index];
        }
        return event;
    }


    /** Returns a class name with a unique id for each step element */
    _getStepId(value: string, index: number): string {

        return `md-step-${value}-${this._stepperId}-${index}`;
    }

    /** Stepper keyboard events for navigating steps */
    handleKeydown(event: KeyboardEvent) {
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
    }


    /**
     * Moves the focus or selected left or right depending on the offset provided and if it should be selected.
     * Valid offsets are 1 and -1.
     * Valid select are true and false.
     */
    moveStep(offset: number, select: boolean = true) {
        if (this._labelWrappers) {
            this.focusIndex = this.selectedIndex;
            const steps: MdStep[] = this._steps.toArray();
            for (let i = this.focusIndex + offset; i < steps.length && i >= 0; i += offset) {
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
    }



    /**
     * Selects the step with the index provided.
     * TODO: internal
     * Note: Improve checks and also change the way active is unset and set.
     */
    selectStep(index: number): void  {
        this.selectedStep.completed = this.selectedStep.valid ? true : false;
        if (this.mode === 'linear') {
            if (!this.selectedStep.valid && index >= this.selectedIndex) { return }
            if (!this.beforeCompleted(index)) { return; }
       }
        const steps: MdStep[] = this._steps.toArray();
        //if (this.mode === 'linear') {
            if (steps[index].completed && !steps[index].editable) {
                return;
            }
        //}
        steps[this.selectedIndex].active = false;
        this.selectedIndex = this.focusIndex = index;
        steps[this.selectedIndex].active = true;
    }

    /** Increment the step index by 1 until a valid step is found. */
    nextStep(select: boolean = true): void {
        this.moveStep(1, select);
    }

    /** Decrement the step index by 1 until a valid step is found. */
    previousStep(select: boolean = true): void {
        this.moveStep(-1, select);
    }

    /** Check if all steps are completed before a specific step */
    beforeCompleted(index: number): boolean {
        const steps: MdStep[] = this._steps.toArray();
        for (var i = this.selectedIndex; i < index; i++) {
            if (!steps[i].completed && !steps[i].optional) {
                return false;
            }
        }
        return true;
    }

    /**
     * To disable step if they are not targetable
     * TODO: internal
     * Note: This has not been started but will disable the step, add class md-step-disabled.
     */
    _isStepDisabled(index: number): boolean {
        /** All steps on a non-linear stepper shouldn't be disabled. */
        if (this.mode === 'nonlinear') {
            return false;
        }
        /** Some logic to see if the specific step is targetable */
        return false;
    }


}


@NgModule({
    imports: [CommonModule, PortalModule, MdIconModule, MdProgressCircleModule],

    exports: [MdStepper, MdStepLabel, MdStepContent, MdStepNav, MdStep],
    declarations: [MdStepper, MdStepLabel, MdStepContent, MdStepNav, MdStep, MdStepLabelWrapper, MdStepContentWrapper, MdStepNavWrapper],
})
export class MdStepperModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MdStepperModule,
            providers: [MdIconRegistry]
        };
    }
}
