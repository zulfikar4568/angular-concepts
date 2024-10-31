import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SelectorModule } from './selector/selector.module';
import { StylingModule } from './styling/styling.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SelectorModule, StylingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-concepts';
}
