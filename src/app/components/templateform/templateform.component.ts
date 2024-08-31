import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './templateform.component.html',
  styleUrl: './templateform.component.css',
})
export class TemplateformComponent {
  loginDetails: any = {
    username: '',
    password: '',
    isChecked: false,
  };

  handleSubmit(formData: any) {
    console.log(formData);
  }
}
