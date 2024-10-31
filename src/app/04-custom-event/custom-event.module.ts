import { NgModule } from "@angular/core";
import { ParentSidebar, SideBar } from "./custom-event.component";

@NgModule({
  declarations: [SideBar, ParentSidebar],
  exports: [SideBar, ParentSidebar]
})
export class CustomEventModule {}
