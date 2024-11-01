import { Component, effect, output, Signal, viewChild } from "@angular/core";
import { outputToObservable } from "@angular/core/rxjs-interop";

export interface IData {
  name: string;
  description: string;
}

@Component({
  selector: 'child-comp',
  template: `
    <div class="form-gtoup">
      <label for="name">Name</label><br/>
      <input type="text" [(ngModel)]="data.name" id="name" />
    </div>
    <div class="form-group">
      <label for="name">Description</label><br/>
      <textarea [(ngModel)]="data.description" id="description" rows="3"></textarea>
    </div>
    <button (click)="setData(data)">Show Data</button>
  `
})
export class ChildComponent {
  dataChange = output<IData>({ alias: 'DATA_CHANGED' });
  data: IData = { name: '', description: '' };

  setData(newData: IData) {
    this.dataChange.emit(newData);
  }
}

@Component({
  selector: 'parent-comp',
  template: `
    <child-comp (DATA_CHANGED)="printData($event)"></child-comp>
  `,
})
export class ParentComponent {
  printData(event: IData) {
    alert(`name: ${event.name} and description: ${event.description}`);
  }
}

// Subscribing programmatically
@Component({
  selector: 'parent-comp-2',
  template: `
    <child-comp />
  `,
})
export class ParentComponent2 {
  myComponentRef: Signal<ChildComponent> = viewChild.required(ChildComponent);

  constructor() {
    effect(() => {
      // Subscribing programmatically
      this.myComponentRef().dataChange.subscribe((event: IData) => {
        alert(`Manual subsribe = name: ${event.name} and description: ${event.description}`);
      })

      // Using RxJS observables as source
      outputToObservable(this.myComponentRef().dataChange)
        .subscribe((event: IData) => {
          alert(`Manual subsribe = name: ${event.name} and description: ${event.description}`);
        });
    })
  }
}
