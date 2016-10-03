import { ElementRef } from '@angular/core';
/** Used in the `md-stepper` view to display step contents */
export declare class MdStepContentWrapper {
    elementRef: ElementRef;
    constructor(elementRef: ElementRef);
    /**
     * Sets focus on the wrapper element
     */
    focus(): void;
}
