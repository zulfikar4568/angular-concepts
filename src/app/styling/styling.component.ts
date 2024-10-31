import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'normal-image',
  template: `<img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2023/2023-11/angular-logo-1200-628.png?sfvrsn=bf64b1ee_3" alt="angular">`,
})
export class NormalImage {}


@Component({
  selector: 'global-image',
  template: `<img src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2023/2023-11/angular-logo-1200-628.png?sfvrsn=bf64b1ee_3" alt="angular">`,
  styles: `
    img {
      width: 200px;
      height: auto;
    }`,
  encapsulation: ViewEncapsulation.None // If none become global
})
export class BringGlobalStyleImage {}


@Component({
  selector: 'encapsulated-component',
  template: `
    <h1 class="custom">Hallo Indonesia</h1>
    <div>
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      // if we use shadowDom it will not effect inside ng-content (child), and also cannot use global styles checkout the style.scss
      h2 {
        margin-left: 30px;
      }
    `
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class EncapsulatedComponent {}
