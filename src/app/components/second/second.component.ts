import { Component, inject } from '@angular/core';
import { ThirdComponent } from '../third/third.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [ThirdComponent, RouterLink],
  template: `<h1></h1>`,
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent {
  // router = inject(Router);
  constructor(private router: Router) {}
  handleNavigation() {
    this.router.navigateByUrl('/databinding');
  }
}
