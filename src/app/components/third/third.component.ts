import { Component } from '@angular/core';
import { GithubserviceService } from '../../services/githubservice.service';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css',
})
export class ThirdComponent {
  constructor(private myData: GithubserviceService) {}

  ngOnInit() {
    this.handleGithubData();
    console.log(this.myData.arrayList);
  }

  handleGithubData() {
    this.myData.fetchedData().subscribe((res: any) => {
      console.log(res);
    });
  }
}
