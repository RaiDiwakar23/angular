import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structuraldirective',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './structuraldirective.component.html',
  styleUrl: './structuraldirective.component.css',
})
export class StructuraldirectiveComponent {
  showBlock: boolean = false;
  state: string = '';
  dayNo: string = '1';

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
}
