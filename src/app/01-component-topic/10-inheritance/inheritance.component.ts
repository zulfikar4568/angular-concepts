import { Component, ElementRef, OnInit } from "@angular/core";

@Component({
  selector: 'list-box-base',
  template: `
    <div>
      <h1>List Box Base</h1>
    </div>
  `
})
export class ListBoxBase implements OnInit {
  constructor(private element: ElementRef) { }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
}

@Component({
  selector: 'custom-list-box',
  template: `
    <div>
      <h1>Custom List Box</h1>
    </div>
  `
})
export class CustomListBox extends ListBoxBase {
  // Forwarding injected dependencies
  constructor(element: ElementRef) {
    super(element);
   }

   // Overriding lifecycle methods
   override ngOnInit(): void {
     super.ngOnInit();
     /** Code in here
      *
      */
   }
}
