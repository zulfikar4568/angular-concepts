import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectorModule } from './01-selector/selector.module';
import { StylingModule } from './02-styling/styling.module';
import { InputModule } from './03-input/input.module';
import { CustomEventModule } from './04-custom-event/custom-event.module';
import { OutputFuncModule } from './05-output-function/output-func.module';
import { ContentProjectionModule } from './06-content-projection/content-projection.module';
import { HostElementModule } from './07-host-elements/host.element.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectorModule, StylingModule, InputModule, CustomEventModule, OutputFuncModule, ContentProjectionModule, HostElementModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-concepts';
}
