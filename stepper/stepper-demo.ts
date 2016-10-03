import {Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs/Observable';


@Component({
  moduleId: module.id,
  selector: 'stepper-demo',
  templateUrl: 'stepper-demo.html',
  styleUrls: ['stepper-demo.css'],
  encapsulation: ViewEncapsulation.None,
})
export class StepperDemo {
  steps = [
    { label: 'Step One', content: 'This is the body of the first step' },
    { label: 'Step Two', content: 'This is the body of the second step' },
    { label: 'Step Three', content: 'This is the body of the third step' },
    { label: 'Step Four', content: 'This is the body of the four step' },
    { label: 'Step Five', content: 'This is the body of the five step' },
  ];

  mode: string = 'nonlinear';
  orientation: string = 'horizontal';

  validState = {one: false, two: false, three: false, four: false};
  savingState = {one: false, two: false, three: false, four: false};
  feedbackState = {one: false, two: false, three: false, four: false};
  warningState = {one: false, two: false, three: false, four: false};

  asyncSteps: Observable<any>;
  constructor() {
    this.asyncSteps = Observable.create((observer: any) => {
      setTimeout(() => {
        observer.next(this.steps);
      }, 1000);
    });
  }
}
