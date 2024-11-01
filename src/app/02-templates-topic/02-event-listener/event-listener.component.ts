import { Component } from "@angular/core";

@Component({
  selector: "event-listener",
  template: `
    <input type="text" (keyup)="updateField($event)">
  `
})
export class EventListener {
  updateField(event: KeyboardEvent) {
    console.log(`Key pressed: ${event.key}`);
    if (event.key === 'Enter') {
      console.log('Enter key pressed');
    }
  }
}
