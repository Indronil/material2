import { ViewContainerRef } from '@angular/core';
import { MdSnackBar } from '@angular/material';
export declare class SnackBarDemo {
    snackBar: MdSnackBar;
    viewContainerRef: ViewContainerRef;
    message: string;
    actionButtonLabel: string;
    action: boolean;
    constructor(snackBar: MdSnackBar, viewContainerRef: ViewContainerRef);
    open(): void;
}
export declare class DemoSnack {
}
