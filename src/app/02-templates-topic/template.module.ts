import { NgModule } from "@angular/core";
import { Binding } from "./01-binding/binding.component";
import { EventListener } from "./02-event-listener/event-listener.component";

@NgModule({
  declarations: [Binding, EventListener],
  exports: [Binding, EventListener]
})
export class TemplateTopic {}
