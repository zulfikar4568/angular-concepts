import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentTopic } from './01-component-topic/component-topic.component';
import { TemplateTopic } from './02-templates-topic/template.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentTopic, TemplateTopic],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-concepts';
}
