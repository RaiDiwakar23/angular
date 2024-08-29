import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-twowaybinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './twowaybinding.component.html',
  styleUrl: './twowaybinding.component.css',
})
export class TwowaybindingComponent {
  name: string = 'Virat Kohli';
  newName: string = 'Rohit Sharma';
  isChecked: boolean = true;

  changePerson() {
    this.newName = 'MSD';
  }
}

// NgModule(In latest versions of angular not needed)
// ngModel(it is related two way data binding)
