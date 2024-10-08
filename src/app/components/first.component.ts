import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-first',
  standalone: true,
  imports: [RouterLink],

  styles: `h1{color: red}
    h2{
        border: 1px solid green
    }
  `,
  templateUrl: './first.component.html',
  //   styleUrl: './first.component.css',
  //   template: `<h1>This is my first component</h1>
  //     <h2>sub heading</h2>`,
  styleUrls: ['first.component.css'],
})
export class FirstComp {}
