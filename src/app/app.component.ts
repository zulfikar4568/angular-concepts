import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentTopic } from './01-component-topic/component-topic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentTopic],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-concepts';
}
