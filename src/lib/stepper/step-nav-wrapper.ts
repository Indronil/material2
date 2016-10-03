import {Directive, ElementRef} from '@angular/core';


/** Used in the `md-stepper` view to display step nav */
@Directive({
  selector: '[md-step-nav-wrapper]'
})
export class MdStepNavWrapper {
  constructor(public elementRef: ElementRef) {}

  /**
   * Sets focus on the wrapper element
   */
  focus(): void {
    //this.elementRef.nativeElement.focus();
  }
}
