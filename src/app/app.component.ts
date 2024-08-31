import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { StructuraldirectiveComponent } from './components/structuraldirective/structuraldirective.component';
import { PipeexampleComponent } from './components/pipeexample/pipeexample.component';
import { TemplateformComponent } from './components/templateform/templateform.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myproject';
}
