import { NgModule } from "@angular/core";
import { CustomCardParent, CustomCardHeader, CustomExpando, UserProfile, CustomToggle } from "./component-query.component";

@NgModule({
  declarations: [CustomCardHeader, CustomCardParent, CustomToggle, CustomExpando, UserProfile],
  exports: [CustomCardHeader, CustomCardParent, CustomToggle, CustomExpando, UserProfile]
})
export class ComponentQueryModule {}
