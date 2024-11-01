import { Component } from "@angular/core";

@Component({
  selector: 'custom-card',
  template: `
    <div class="card-shadow">
      <ng-content select=".card-title"/>
      <div class="card-divider"><h4>This is divider</h4></div>
      <ng-content select=".card-body"/>
    </div>
  `
})
export class CustomCard {}
