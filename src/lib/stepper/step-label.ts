import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';
import {TemplatePortalDirective} from '../core';

/** Used to flag step contents for use with the portal directive */
@Directive({
  selector: '[md-step-label]',
})
export class MdStepLabel extends TemplatePortalDirective {
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}
