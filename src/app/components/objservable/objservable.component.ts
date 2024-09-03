import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { GithubserviceService } from '../../services/githubservice.service';

@Component({
  selector: 'app-objservable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './objservable.component.html',
  styleUrl: './objservable.component.css',
})
export class ObjservableComponent {
  // myobservableobj = new Observable((subscription) => {
  //   setTimeout(() => {
  //     subscription.next('Video 1');
  //   }, 1000);
  //   setTimeout(() => {
  //     subscription.next('video 2');
  //   }, 2000);
  //   setTimeout(() => {
  //     subscription.next('video 3');
  //   }, 3000);
  //   setTimeout(() => {
  //     subscription.error('Video not released');
  //   }, 4000);
  //   // subscription.complete();
  // });
  // handleSubscription() {
  //   this.myobservableobj.subscribe(
  //     (value: any) => {
  //       console.log(value);
  //     },
  //     () => {
  //       alert('Something went wrong');
  //     }
  //   );
  // }

  //!making an api call
  //!Step 1: create a method on the button
  //!Step 2: inform app.config.ts that you would use httpclient
  //!Step 3: perform depency Injection through constructor method
  //!Step 4: which method the dependency property needs to use
  //!Step 5: Subscripe to the request
  //!Step 6: handle the success condition and the error condition

  // constructor(private apiCaller: HttpClient) {}

  //! DRY --> DONOT REPEAT YOURSELF

  githubData: any = [];
  cityArr: any = [];
  // apiCaller = inject(HttpClient); // introduced in angular 16

  ngOnInit() {
    this.handledata();
  }

  constructor(private myService: GithubserviceService) {}

  // handleFetchData() {
  //   this.apiCaller.get('https://api.github.com/users').subscribe(
  //     (res: any) => {
  //       console.log(res);
  //       this.githubData = res;
  //     },
  //     (error) => {
  //       if (error.statuscode == 404) {
  //         alert('data not found');
  //       } else if (error.statuscode == 500) {
  //         alert('Some issue with the server');
  //       }
  //     }
  //   );
  // }

  getArrayList() {
    this.cityArr = this.myService.serviceForCityList();
    console.log(this.cityArr);
  }

  handledata() {
    this.myService.fetchedData().subscribe((res: any) => {
      this.githubData = res;
    });
  }
}
