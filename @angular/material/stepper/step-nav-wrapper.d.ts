import { ElementRef } from '@angular/core';
/** Used in the `md-stepper` view to display step nav */
export declare class MdStepNavWrapper {
    elementRef: ElementRef;
    constructor(elementRef: ElementRef);
    /**
     * Sets focus on the wrapper element
     */
    focus(): void;
}
