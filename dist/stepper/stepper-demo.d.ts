import { Observable } from 'rxjs/Observable';
export declare class StepperDemo {
    steps: {
        label: string;
        content: string;
    }[];
    mode: string;
    orientation: string;
    validState: {
        one: boolean;
        two: boolean;
        three: boolean;
        four: boolean;
    };
    savingState: {
        one: boolean;
        two: boolean;
        three: boolean;
        four: boolean;
    };
    feedbackState: {
        one: boolean;
        two: boolean;
        three: boolean;
        four: boolean;
    };
    warningState: {
        one: boolean;
        two: boolean;
        three: boolean;
        four: boolean;
    };
    asyncSteps: Observable<any>;
    constructor();
}
