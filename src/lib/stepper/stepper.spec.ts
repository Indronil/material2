import {async, fakeAsync, tick, ComponentFixture, TestBed} from '@angular/core/testing';
import {MdStepper, MdStepperModule} from './stepper';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';


describe('MdStepper', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MdStepperModule.forRoot()],
      declarations: [
        SimpleStepperTestApp,
        AsyncStepperTestApp,
        DisabledStepperTestApp
      ],
    });

    TestBed.compileComponents();
  }));

  describe('basic behavior', () => {
    let fixture: ComponentFixture<SimpleStepperTestApp>;

    beforeEach(() => {
      fixture = TestBed.createComponent(SimpleStepperTestApp);
    });

    it('should default to the first step', () => {
      checkSelectedIndex(1, fixture);
    });

    it('should change selected index on click', () => {
      let component = fixture.debugElement.componentInstance;
      component.selectedIndex = 0;
      checkSelectedIndex(0, fixture);

      // select the second step
      let stepLabel = fixture.debugElement.queryAll(By.css('.md-step'))[1];
      stepLabel.nativeElement.click();
      checkSelectedIndex(1, fixture);

      // select the third step
      stepLabel = fixture.debugElement.queryAll(By.css('.md-step'))[2];
      stepLabel.nativeElement.click();
      checkSelectedIndex(2, fixture);
    });

    it('should support two-way binding for selectedIndex', async(() => {
      let component = fixture.componentInstance;
      component.selectedIndex = 0;

      fixture.detectChanges();

      let stepLabel = fixture.debugElement.queryAll(By.css('.md-step'))[1];
      stepLabel.nativeElement.click();

      fixture.detectChanges();
      fixture.whenStable().then(() => {
        expect(component.selectedIndex).toBe(1);
      });
    }));

    it('should cycle step focus with focusNextStep/focusPreviousStep functions', fakeAsync(() => {
      let testComponent = fixture.componentInstance;
      let stepComponent = fixture.debugElement.query(By.css('md-stepper')).componentInstance;

      spyOn(testComponent, 'handleFocus').and.callThrough();
      fixture.detectChanges();

      stepComponent.focusIndex = 0;
      fixture.detectChanges();
      tick();
      expect(stepComponent.focusIndex).toBe(0);
      expect(testComponent.handleFocus).toHaveBeenCalledTimes(1);
      expect(testComponent.focusEvent.index).toBe(0);

      stepComponent.focusNextStep();
      fixture.detectChanges();
      tick();
      expect(stepComponent.focusIndex).toBe(1);
      expect(testComponent.handleFocus).toHaveBeenCalledTimes(2);
      expect(testComponent.focusEvent.index).toBe(1);

      stepComponent.focusNextStep();
      fixture.detectChanges();
      tick();
      expect(stepComponent.focusIndex).toBe(2);
      expect(testComponent.handleFocus).toHaveBeenCalledTimes(3);
      expect(testComponent.focusEvent.index).toBe(2);

      stepComponent.focusNextStep();
      fixture.detectChanges();
      tick();
      expect(stepComponent.focusIndex).toBe(2); // should stop at 2
      expect(testComponent.handleFocus).toHaveBeenCalledTimes(3);
      expect(testComponent.focusEvent.index).toBe(2);

      stepComponent.focusPreviousStep();
      fixture.detectChanges();
      tick();
      expect(stepComponent.focusIndex).toBe(1);
      expect(testComponent.handleFocus).toHaveBeenCalledTimes(4);
      expect(testComponent.focusEvent.index).toBe(1);

      stepComponent.focusPreviousStep();
      fixture.detectChanges();
      tick();
      expect(stepComponent.focusIndex).toBe(0);
      expect(testComponent.handleFocus).toHaveBeenCalledTimes(5);
      expect(testComponent.focusEvent.index).toBe(0);

      stepComponent.focusPreviousStep();
      fixture.detectChanges();
      tick();
      expect(stepComponent.focusIndex).toBe(0); // should stop at 0
      expect(testComponent.handleFocus).toHaveBeenCalledTimes(5);
      expect(testComponent.focusEvent.index).toBe(0);
    }));

    it('should change steps based on selectedIndex', fakeAsync(() => {
      let component = fixture.componentInstance;
      let stepComponent = fixture.debugElement.query(By.css('md-stepper')).componentInstance;

      spyOn(component, 'handleSelection').and.callThrough();

      checkSelectedIndex(1, fixture);

      stepComponent.selectedIndex = 2;

      checkSelectedIndex(2, fixture);
      tick();

      expect(component.handleSelection).toHaveBeenCalledTimes(1);
      expect(component.selectEvent.index).toBe(2);
    }));
  });

  describe('disabled steps', () => {
    let fixture: ComponentFixture<DisabledStepperTestApp>;

    beforeEach(async(() => {
      fixture = TestBed.createComponent(DisabledStepperTestApp);
      fixture.detectChanges();
    }));

    it('should disable the second step', () => {
      let labels = fixture.debugElement.queryAll(By.css('.md-step'));

      expect(labels[1].nativeElement.classList.contains('md-step-disabled')).toBeTruthy();
    });

    it('should skip over disabled steps when navigating by keyboard', () => {
      let component: MdStepper = fixture.debugElement.query(By.css('md-stepper'))
          .componentInstance;

      component.focusIndex = 0;
      component.focusNextStep();

      expect(component.focusIndex).toBe(2);

      component.focusNextStep();
      expect(component.focusIndex).toBe(2);

      component.focusPreviousStep();
      expect(component.focusIndex).toBe(0);

      component.focusPreviousStep();
      expect(component.focusIndex).toBe(0);
    });

    it('should ignore attempts to select a disabled step', () => {
      let component: MdStepper = fixture.debugElement.query(By.css('md-stepper'))
          .componentInstance;

      component.selectedIndex = 0;
      expect(component.selectedIndex).toBe(0);

      component.selectedIndex = 1;
      expect(component.selectedIndex).toBe(0);
    });

    it('should ignore attempts to focus a disabled step', () => {
      let component: MdStepper = fixture.debugElement.query(By.css('md-stepper'))
          .componentInstance;

      component.focusIndex = 0;
      expect(component.focusIndex).toBe(0);

      component.focusIndex = 1;
      expect(component.focusIndex).toBe(0);
    });

    it('should ignore attempts to set invalid selectedIndex', () => {
      let component: MdStepper = fixture.debugElement.query(By.css('md-stepper'))
          .componentInstance;

      component.selectedIndex = 0;
      expect(component.selectedIndex).toBe(0);

      component.selectedIndex = -1;
      expect(component.selectedIndex).toBe(0);

      component.selectedIndex = 4;
      expect(component.selectedIndex).toBe(0);
    });

    it('should ignore attempts to set invalid focusIndex', () => {
      let component: MdStepper = fixture.debugElement.query(By.css('md-stepper'))
          .componentInstance;

      component.focusIndex = 0;
      expect(component.focusIndex).toBe(0);

      component.focusIndex = -1;
      expect(component.focusIndex).toBe(0);

      component.focusIndex = 4;
      expect(component.focusIndex).toBe(0);
    });
  });

  describe('async steps', () => {
    let fixture: ComponentFixture<AsyncStepperTestApp>;

    it('should show steps when they are available', async(() => {
      fixture = TestBed.createComponent(AsyncStepperTestApp);

      let labels = fixture.debugElement.queryAll(By.css('.md-step-label'));

      expect(labels.length).toBe(0);

      fixture.detectChanges();

      fixture.whenStable().then(() => {
        fixture.detectChanges();
        labels = fixture.debugElement.queryAll(By.css('.md-step-label'));
        expect(labels.length).toBe(2);
      });
    }));
  });

  /**
   * Checks that the `selectedIndex` has been updated; checks that the label and body have the
   * `md-step-active` class
   */
  function checkSelectedIndex(index: number, fixture: ComponentFixture<any>) {
    fixture.detectChanges();

    let stepComponent: MdStepper = fixture.debugElement
        .query(By.css('md-stepper')).componentInstance;
    expect(stepComponent.selectedIndex).toBe(index);

    let stepLabelElement = fixture.debugElement
        .query(By.css(`.md-step:nth-of-type(${index + 1})`)).nativeElement;
    expect(stepLabelElement.classList.contains('md-step-active')).toBe(true);

    let stepContentElement = fixture.debugElement
        .query(By.css(`#${stepLabelElement.id}`)).nativeElement;
    expect(stepContentElement.classList.contains('md-step-active')).toBe(true);
  }
});

@Component({
  selector: 'test-app',
  template: `
    <md-stepper class="stepper"
        [(selectedIndex)]="selectedIndex"
        (focusChange)="handleFocus($event)"
        (selectChange)="handleSelection($event)">
      <md-step>
        <template md-step-label>Step One</template>
        <template md-step-content>Step one content</template>
      </md-step>
      <md-step>
        <template md-step-label>Step Two</template>
        <template md-step-content>Step two content</template>
      </md-step>
      <md-step>
        <template md-step-label>Step Three</template>
        <template md-step-content>Step three content</template>
      </md-step>
    </md-stepper>
  `
})
class SimpleStepperTestApp {
  selectedIndex: number = 1;
  focusEvent: any;
  selectEvent: any;
  handleFocus(event: any) {
    this.focusEvent = event;
  }
  handleSelection(event: any) {
    this.selectEvent = event;
  }
}

@Component({
  selector: 'test-app',
  template: `
    <md-stepper class="stepper">
      <md-step>
        <template md-step-label>Step One</template>
        <template md-step-content>Step one content</template>
      </md-step>
      <md-step disabled>
        <template md-step-label>Step Two</template>
        <template md-step-content>Step two content</template>
      </md-step>
      <md-step>
        <template md-step-label>Step Three</template>
        <template md-step-content>Step three content</template>
      </md-step>
    </md-stepper>
  `,
})
class DisabledStepperTestApp {}

@Component({
  selector: 'test-app',
  template: `
    <md-stepper class="stepper">
      <md-step *ngFor="let step of steps | async">
        <template md-step-label>{{ step.label }}</template>
        <template md-step-content>{{ step.content }}</template>
      </md-step>
   </md-stepper>
  `
})
class AsyncStepperTestApp {
  private _steps = [
    { label: 'one', content: 'one' },
    { label: 'two', content: 'two' }
  ];

  steps: Observable<any>;

  // Use ngOnInit because there is some issue with scheduling the async task in the constructor.
  ngOnInit() {
    this.steps = Observable.create((observer: any) => {
      requestAnimationFrame(() => observer.next(this._steps));
    });
  }
}
