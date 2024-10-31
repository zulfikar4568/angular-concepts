import { Component, Input } from '@angular/core';

/**
 * - Angular records inputs statically at compile-time. Inputs cannot be added or removed at run-time.
 * - When extending a component class, inputs are inherited by the child class.
 * - Input names are case-sensitive.
 */

@Component({
  selector: 'progress-order',
  template: `
  <h1>Progress is: {{ progress }}</h1>
  <h2>AfterFormulated: {{ ambilRahasia }}</h2>`
})
export class ProgressOrder {
  @Input({ required: true, transform: convertToPercentage, alias: 'orderPercentage' }) progress: number = 0;

  private rahasia: string = '';

  get ambilRahasia(): string {
    return this.rahasia;
  }

  @Input({ transform: makeFormulaSecret, required: true })
  set settingRahasia(val: string) {
    this.rahasia = val;
  }
}

function makeFormulaSecret(val: string) {
  return `${val.trim()}23h$#%kf23&&^%$`;
}

function convertToPercentage(progress: number) {
  return `${progress}%`;
}
