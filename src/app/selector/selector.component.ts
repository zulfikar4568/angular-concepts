import { Component } from "@angular/core";

/**
 * - Angular matches selectors statically at compile-time.
 * - An element can match exactly one component selector.
 * - Component selectors are case-sensitive
 */


/**
 * Angular have 3 types of selectors (type-selector, attribute-selector, class-selector)
 */

@Component({
  selector: 'selector',
  template: `<h1>Selector 1</h1>`
})
export class SelectorComponent1 {}

@Component({
  selector: 'Selector',
  template: `<h1>Selector 2</h1>`
})
export class SelectorComponent2 {}

@Component({
  selector: '.btn-custom',
  template: `
    <div>
      <h1>Hi this is custom button</h1>
      <button class="btn">Custom Button</button>
    </div>
  `

})
export class SelectorClass {}

@Component({
  selector: '[custom-attr]',
  template: `<h1>This is custom attributes</h1>`
})
export class SelectorAttribute {}
