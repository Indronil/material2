import {Directive, ElementRef} from '@angular/core';


/** Used in the `md-stepper` view to display step labels */
@Directive({
  selector: '[md-step-label-wrapper]'
})
export class MdStepLabelWrapper {
  constructor(public elementRef: ElementRef) {}

  /**
   * Sets focus on the wrapper element
   */
  focus(): void {
    this.elementRef.nativeElement.focus();
  }
}
