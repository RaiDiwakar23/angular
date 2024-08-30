import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { StructuraldirectiveComponent } from './components/structuraldirective/structuraldirective.component';
import { PipeexampleComponent } from './components/pipeexample/pipeexample.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PipeexampleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'myproject';
}
