import { ElementRef } from '@angular/core';
/** Used in the `md-stepper` view to display step labels */
export declare class MdStepLabelWrapper {
    elementRef: ElementRef;
    constructor(elementRef: ElementRef);
    /**
     * Sets focus on the wrapper element
     */
    focus(): void;
}
