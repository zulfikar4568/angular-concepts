import { Component } from "@angular/core";

@Component({
  selector: 'binding',
  template: `
  <!-- Interpolation Binding -->
  <p>This is binding dynamic {{text}} text</p>

  <!-- Property Binding -->
  <button [disabled]="isFormValid">Binding Properties</button>

  <!-- Attribute binding -->
  <li role='list'>
    <ul [attr.role]="role">list</ul>
  </li>

  <!-- Class Binding -->
  <button [class]="classButton" [class.btn-info]="isInfo">Class Binding</button>

   <!-- CSS Binding -->
  <button [style]="buttonStyle" [style.background-color]="backgroundColor">CSS Binding</button>
  `
})
export class Binding {
  text: string ='interpolation';
  isFormValid = true;
  role: string = 'listitem';
  isInfo: boolean = true;

  classButton = 'btn btn-wide';

  backgroundColor: string = "#1ce56e"
  buttonStyle = {
    border: 'none',
    color: "#fff",
    borderRadius: '5px',
    minHeight: '30px',
  }
}
