import {Directive, ElementRef} from '@angular/core';


/** Used in the `md-stepper` view to display step contents */
@Directive({
  selector: '[md-step-content-wrapper]'
})
export class MdStepContentWrapper {
  constructor(public elementRef: ElementRef) {}

  /**
   * Sets focus on the wrapper element
   */
  focus(): void {
    //this.elementRef.nativeElement.focus();
  }
}
