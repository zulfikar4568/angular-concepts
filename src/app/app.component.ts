import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectorModule } from './01-selector/selector.module';
import { StylingModule } from './02-styling/styling.module';
import { InputModule } from './03-input/input.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectorModule, StylingModule, InputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-concepts';
}
