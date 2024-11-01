import { NgModule } from "@angular/core";
import { CustomCard } from "./content-projection.component";

@NgModule({
  declarations: [CustomCard],
  exports: [CustomCard]
})
export class ContentProjectionModule {}
