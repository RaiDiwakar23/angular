import { Component } from '@angular/core';
import { ThirdComponent } from '../third/third.component';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [ThirdComponent],
  template: `<h1></h1>`,
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent {}
