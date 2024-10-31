import { NgModule } from "@angular/core";
import { BringGlobalStyleImage, EncapsulatedComponent, NormalImage } from "./styling.component";

@NgModule({
  declarations: [NormalImage, BringGlobalStyleImage, EncapsulatedComponent],
  exports: [NormalImage, BringGlobalStyleImage, EncapsulatedComponent]
})
export class StylingModule {}
