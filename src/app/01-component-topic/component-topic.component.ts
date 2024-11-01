import { NgModule } from "@angular/core";
import { SelectorModule } from './01-selector/selector.module';
import { StylingModule } from './02-styling/styling.module';
import { InputModule } from './03-input/input.module';
import { CustomEventModule } from './04-custom-event/custom-event.module';
import { OutputFuncModule } from './05-output-function/output-func.module';
import { ContentProjectionModule } from './06-content-projection/content-projection.module';
import { HostElementModule } from './07-host-elements/host.element.module';
import { LifecycleModule } from "./08-lifecycle/lifecycle.module";
import { ComponentQueryModule } from './09-component-query/component-query.module';

@NgModule({
  imports: [SelectorModule, StylingModule, InputModule, CustomEventModule, OutputFuncModule, ContentProjectionModule, HostElementModule, LifecycleModule, ComponentQueryModule]
})
export class ComponentTopic {}
