import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, Input, QueryList, ViewChild, ViewChildren } from "@angular/core";

/**
 * View query results become available in the ngAfterViewInit lifecycle method.
 * Queries never pierce through component boundaries. View queries can only retrieve results from the component's template.
 */

@Component({
  selector: 'custom-card-header',
  template: `
    <div>{{text}}</div>
  `,
})
export class CustomCardHeader {
  @Input() text: string = 'Header of Custom Card';
}

@Component({
  selector: 'custom-card-parent',
  template: `
    <custom-card-header [text]="'Visit Indonesia!'" />
    <custom-card-header [text]="'Visit Rusia!'" />
    <custom-card-header [text]="'Visit Afrika!'"></custom-card-header>
  `,
})
export class CustomCardParent implements AfterViewInit {
  @ViewChild(CustomCardHeader) header!: CustomCardHeader;

  @ViewChildren(CustomCardHeader) headers!: QueryList<CustomCardHeader>;

  ngAfterViewInit(): void {
    console.log('single result' + this.header.text);

    this.headers.forEach((header, index) => console.log(`multi result ${index}: ` + header.text));
  }
}

/**
 * Content query results become available in the ngAfterContentInit lifecycle method.
 * Queries never pierce through component boundaries. Content queries can only retrieve results from the same template as the component itself.
 */

@Component({
  selector: 'custom-toggle',
  template: `
  `,
})
export class CustomToggle {
  @Input() text!: string;
}

@Component({
  selector: 'custom-expando',
  template: ``,
})
export class CustomExpando implements AfterContentInit {
  @ContentChild(CustomToggle) toggle!: CustomToggle;

  @ContentChildren(CustomToggle) toogles!: QueryList<CustomToggle>;

  ngAfterContentInit(): void {
    console.log(this.toggle.text);

    this.toogles.forEach((item, index) => console.log(`Content result ${index}: ` + item.text));
  }
}

@Component({
  selector: 'user-profile',
  template: `
    <custom-expando>
      <custom-toggle [text]="'Show 1'" />
      <custom-toggle [text]="'Show 2'" />
      <custom-toggle [text]="'Show 3'" />
    </custom-expando>
  `
})
export class UserProfile {}

@Component({
  selector: 'action-bar',
  template: `
    <button #save>Save</button>
    <button #cancel>Cancel</button>
  `
})
export class ActionBar {
  @ViewChild('save') saveButton!: ElementRef<HTMLButtonElement>;
}
