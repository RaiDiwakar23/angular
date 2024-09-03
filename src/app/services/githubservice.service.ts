import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GithubserviceService {
  constructor(private http: HttpClient) {}

  arrayList = ['Mumbai', 'Pune', 'Bangalore'];

  serviceForCityList() {
    return this.arrayList;
  }

  fetchedData() {
    return this.http.get('https://api.github.com/users');
  }
}
