import {
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { NotapplicablePipe } from '../../Pipes/notapplicable.pipe';

@Component({
  selector: 'app-pipeexample',
  standalone: true,
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    DatePipe,
    JsonPipe,
    NotapplicablePipe,
  ],
  templateUrl: './pipeexample.component.html',
  styleUrl: './pipeexample.component.css',
})
export class PipeexampleComponent {
  name: string = 'rahul';
  anotherName: string = 'RAHUL';
  price: number = 500;
  date: Date = new Date();

  student: any = {
    name: null,
    address: '',
    doorNo: undefined,
    hobby: 'sleeping',
  };
}
