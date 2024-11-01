import { NgModule } from "@angular/core";
import { ComponentBinding } from "./host-element.component";
import { ReactiveFormsModule } from "@angular/forms";
import { NgClass } from "@angular/common";

@NgModule({
  declarations: [ComponentBinding],
  exports: [ComponentBinding],
  imports: [ReactiveFormsModule, NgClass]
})
export class HostElementModule {}
