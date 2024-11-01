import { Component, effect, Renderer2, signal, ViewEncapsulation } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { FormControl, Validators } from "@angular/forms";
import { map } from "rxjs";

@Component({
  selector: 'component-binding',
  styleUrl: './host-element.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
  template: `
    <form>
      <fieldset [ngClass]="emailControl.invalid ? 'invalid' : 'valid'">
        <legend>Subscribe Today</legend>
        <p>Enter your email address to subscribe to our newsletter</p>
        <section>
          <label for="email"></label>
          <input
            type="email"
            id="email"
            [formControl]="emailControl"
            autocomplete="off"
          />
          <button [class.disabled]="emailControl.invalid">Subscribe</button>
        </section>
      </fieldset>
    </form>
  `,
  host: {
    '[class.valid]': 'isValid()'
  }
})
export class ComponentBinding {
  protected emailControl = new FormControl<string>('', {
    nonNullable: true,
    validators: [Validators.required, Validators.email],
  });

  private isValid = toSignal(this.emailControl.statusChanges.pipe(map(status => { return status === 'VALID'; })))

  constructor(private rendered: Renderer2) {
    effect(() => {
      this.isValid()
        ? this.rendered.addClass(document.body, 'valid')
        : this.rendered.removeClass(document.body, 'valid');
    })
  }
}
