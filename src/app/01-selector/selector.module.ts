import { NgModule } from "@angular/core";
import { SelectorAttribute, SelectorClass, SelectorComponent1, SelectorComponent2 } from "./selector.component";

@NgModule({
  declarations: [SelectorComponent1, SelectorComponent2, SelectorClass, SelectorAttribute],
  exports: [SelectorComponent1, SelectorComponent2, SelectorClass, SelectorAttribute]
})
export class SelectorModule {}
