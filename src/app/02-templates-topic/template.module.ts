import { NgModule } from "@angular/core";
import { Binding } from "./01-binding/binding.component";
import { EventListener } from "./02-event-listener/event-listener.component";
import { TwoWayBindingModule } from "./03-two-way-binding/two-way-binding.module";

@NgModule({
  imports: [TwoWayBindingModule],
  declarations: [Binding, EventListener],
  exports: [Binding, EventListener]
})
export class TemplateTopic {}
