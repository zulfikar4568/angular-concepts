import { NgModule } from "@angular/core";
import { TwoWayBindingCounter, TwoWayBindingFormControl, TwoWayBindingParentCounter } from "./two-way-binding.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [FormsModule],
  declarations: [TwoWayBindingFormControl, TwoWayBindingCounter, TwoWayBindingParentCounter],
  exports: [TwoWayBindingFormControl, TwoWayBindingCounter, TwoWayBindingParentCounter]
})
export class TwoWayBindingModule {}
