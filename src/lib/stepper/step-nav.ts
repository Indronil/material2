import {Directive, TemplateRef, ViewContainerRef} from '@angular/core';
import {TemplatePortalDirective} from '../core';

/** Used to flag step nav for use with the portal directive */
@Directive({
  selector: '[md-step-nav]',
})
export class MdStepNav extends TemplatePortalDirective {
  constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef) {
    super(templateRef, viewContainerRef);
  }
}
