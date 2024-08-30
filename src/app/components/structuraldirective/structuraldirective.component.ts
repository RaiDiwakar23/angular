import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structuraldirective',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './structuraldirective.component.html',
  styleUrl: './structuraldirective.component.css',
})
export class StructuraldirectiveComponent {
  showBlock: boolean = false;
  state: string = '';
  dayNo: string = '1';

  isred: boolean = true;

  studentData: any = [
    {
      name: 'Virat Kohli',
      age: 30,
      isgraduate: true,
      imgsource:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww',
    },
    {
      name: 'Rohit Sharma',
      age: 33,
      isgraduate: false,
      imgsource:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww',
    },
    {
      name: 'Suresh Raina',
      age: 35,
      isgraduate: true,
      imgsource:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww',
    },
    {
      name: 'Jasprit Bumrah',
      age: 35,
      isgraduate: true,
      imgsource:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww',
    },
  ];

  cityList: string[] = [
    'Mumbai',
    'Bangalore',
    'Hyderabad',
    'Pune',
    'Kolkata',
    'Shillong',
    'Patna',
  ];

  countries: string[] = ['India', 'Nepal', 'Bhutan', 'USA', 'Germany'];

  showElement() {
    this.showBlock = true;
  }

  hideElement() {
    this.showBlock = false;
  }

  toggle() {
    // if (this.showBlock == true) {
    //   this.showBlock = false;
    // } else {
    //   this.showBlock = true;
    // }

    this.showBlock = !this.showBlock;
  }

  changeBg() {
    this.isred = !this.isred;
  }
}
