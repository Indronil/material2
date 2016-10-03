import { TemplateRef, ViewContainerRef } from '@angular/core';
import { TemplatePortalDirective } from '../core';
/** Used to flag step contents for use with the portal directive */
export declare class MdStepContent extends TemplatePortalDirective {
    constructor(templateRef: TemplateRef<any>, viewContainerRef: ViewContainerRef);
}
