import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'two-way-form-control',
  template: `
    <main>
      <h2>Hello {{firstName}} </h2>
      <input type="text" [(ngModel)]="firstName">
    </main>
  `
})
export class TwoWayBindingFormControl {
  firstName: string = 'Zulfikar';
}

@Component({
  selector: 'two-way-counter',
  template: `
    <button (click)="updateCount(-1)">-</button>
    <span>{{ count }}</span>
    <button (click)="updateCount(+1)">+</button>
  `
})
export class TwoWayBindingCounter {
  @Input() count!: number;
  @Output() countChange = new EventEmitter<number>();

  updateCount(amount: number): void {
    this.count += amount;

    // This will update count on parent component
    this.countChange.emit(this.count);
  }
}

@Component({
  selector: 'two-way-parent-counter',
  template: `
    <main>
      <h1>Counter: {{ initialCount }}</h1>
      <two-way-counter [(count)]="initialCount"></two-way-counter>
    </main>
  `
})
export class TwoWayBindingParentCounter {
  initialCount: number = 18;
}
