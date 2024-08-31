import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css',
})
export class ReactiveformComponent {
  myForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl(''),
  });

  handleSubmit() {
    console.log(this.myForm);
  }
}
