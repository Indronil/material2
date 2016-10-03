import { ModuleWithProviders, QueryList } from '@angular/core';
import { MdStepLabel } from './step-label';
import { MdStepContent } from './step-content';
import { MdStepNav } from './step-nav';
import { MdStepLabelWrapper } from './step-label-wrapper';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/** A simple change event emitted on focus or selection changes. */
export declare class MdStepChangeEvent {
    index: number;
    step: MdStep;
}
export declare class MdStep {
    label: MdStepLabel;
    content: MdStepContent;
    nav: MdStepNav;
    /**
     * Step active setting, if step is active set to true.
     * TODO: internal
     * Note: Look into changing the way active is currently unset and set.
     */
    private _active;
    active: boolean;
    /** Step editable setting. */
    private _editable;
    editable: boolean;
    /** Step valid setting. */
    private _valid;
    valid: boolean;
    /**
     * Step optional setting, can be skipped.
     * TODO: internal
     * Note: Needs completing.
     */
    private _optional;
    optional: boolean;
    /**
     * Step saving after event save for step.
     * TODO: internal
     * Note: Needs completing.
     */
    private _saving;
    saving: boolean;
    /**
     * Step transient feedback true or false.
     * TODO: internal
     * Note: Needs completing.
     */
    private _feedback;
    feedback: boolean;
    /**
     * Step transient feedback message.
     * TODO: internal
     * Note: Needs completing.
     */
    private _feedbackMessage;
    feedbackMessage: string;
    /**
     * Step warning true or false.
     * TODO: internal
     * Note: Needs completing.
     */
    private _warning;
    warning: boolean;
    /**
     * Step warning message.
     * TODO: internal
     * Note: Needs completing.
     */
    private _warningMessage;
    warningMessage: string;
    /** Step completed setting, if step is complete set to true. */
    private _completed;
    completed: boolean;
    /** Step valid setting. */
    readonly isTargetable: boolean;
    /** Step icon */
    private readonly _stepperIconLigature;
}
/**
 * Material design stepper component.  Supports basic step (label + content + nav) and includes
 * keyboard navigation, and screen reader.
 * See: https://www.google.com/design/spec/components/steppers.html
 */
export declare class MdStepper {
    _steps: QueryList<MdStep>;
    _labelWrappers: QueryList<MdStepLabelWrapper>;
    private _isInitialized;
    private _focusIndex;
    private _stepperId;
    /** Stepper mode can be nonlinear or linear.
     * TODO: internal
     * Node: This has not been fully implemented and needs to be finished.
     */
    private _mode;
    mode: string;
    /** Stepper orientation can be horizontal or vertical.
     * TODO: internal
     * Node: This has not been fully implemented and needs to be finished.
     */
    private _orientation;
    orientation: string;
    /** Output to enable support for two-way binding on `mode`. */
    private _onModeChange;
    readonly modeChange: Observable<any>;
    /** Output to enable support for two-way binding on `orientation`. */
    private _onOrientationChange;
    readonly orientationChange: Observable<any>;
    /** Stepper selected step index. */
    private _selectedIndex;
    selectedIndex: number;
    readonly selectedStep: MdStep;
    /**
     * Determines if an index is valid.  If the steps are not ready yet, we assume that the user is
     * providing a valid index and return true.
     */
    isValidIndex(index: number): boolean;
    /** Output to enable support for two-way binding on `selectedIndex`. */
    private readonly _selectedIndexChange;
    private _onFocusChange;
    readonly focusChange: Observable<MdStepChangeEvent>;
    private _onSelectChange;
    readonly selectChange: Observable<MdStepChangeEvent>;
    constructor();
    ngAfterViewChecked(): void;
    /**
     * Reference to the current label wrapper; defaults to null for initial render before the
     * ViewChildren references are ready.
     */
    private readonly _currentLabelWrapper;
    /** Tracks which element has focus; used for keyboard navigation */
    /** When the focus index is set, we must manually send focus to the correct label */
    focusIndex: number;
    private _createChangeEvent(index);
    /** Returns a class name with a unique id for each step element */
    _getStepId(value: string, index: number): string;
    /** Stepper keyboard events for navigating steps */
    handleKeydown(event: KeyboardEvent): void;
    /**
     * Moves the focus or selected left or right depending on the offset provided and if it should be selected.
     * Valid offsets are 1 and -1.
     * Valid select are true and false.
     */
    moveStep(offset: number, select?: boolean): void;
    /**
     * Selects the step with the index provided.
     * TODO: internal
     * Note: Improve checks and also change the way active is unset and set.
     */
    selectStep(index: number): void;
    /** Increment the step index by 1 until a valid step is found. */
    nextStep(select?: boolean): void;
    /** Decrement the step index by 1 until a valid step is found. */
    previousStep(select?: boolean): void;
    /** Check if all steps are completed before a specific step */
    beforeCompleted(index: number): boolean;
    /**
     * To disable step if they are not targetable
     * TODO: internal
     * Note: This has not been started but will disable the step, add class md-step-disabled.
     */
    _isStepDisabled(index: number): boolean;
}
export declare class MdStepperModule {
    static forRoot(): ModuleWithProviders;
}
