import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentTopic } from './01-component-topic/component-topic.component';
import { TemplateTopic } from './02-templates-topic/template.module';
import { TwoWayBindingModule } from "./02-templates-topic/03-two-way-binding/two-way-binding.module";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentTopic, TemplateTopic, TwoWayBindingModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-concepts';
}
