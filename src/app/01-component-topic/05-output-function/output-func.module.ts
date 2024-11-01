import { NgModule } from "@angular/core";
import { ChildComponent, ParentComponent, ParentComponent2 } from "./output-func.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [FormsModule],
  declarations: [ChildComponent, ParentComponent, ParentComponent2],
  exports: [ChildComponent, ParentComponent, ParentComponent2]
})
export class OutputFuncModule {}
