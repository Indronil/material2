import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';
import {TemplatePortalDirective} from '../core';

/** Used to flag step contents for use with the portal directive */
@Directive({
  selector: '[md-step-content]'
})
export class MdStepContent extends TemplatePortalDirective {
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}
