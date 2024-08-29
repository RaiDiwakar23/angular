import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css',
})
export class DatabindingComponent {
  // name: string = 'Qspiders';
  // displayGreeting() {
  //   return 'Hello Everyone';
  // }
  // name: string = 'Rohit Sharma';
  // age: number = 20;
  // isStudent: boolean = true;
  // address: any = {
  //   city: 'Hyderabad',
  //   doorNo: 15,
  // };
  // genderType: string = 'checkBox';
  // hobby: string = 'playing';
  // imageSource: string =
  //   'https://images.unsplash.com/photo-1660798027105-5da8ad164e27?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  // imageWidth: number = 70;
  // displayPara: boolean = false;
  // handleClick() {
  //   this.name = 'Virat Kohli';
  //   this.age = 30;
  // }
  // handleKeyUp() {
  //   alert('Key was pressed');
  // }

  employeeName: string = 'John Smith';
  inputType: string = 'radio';
  student: string = 'some student';

  showName() {
    console.log('Hello i am an event');
    this.employeeName = 'Jane Doe';
  }
}
