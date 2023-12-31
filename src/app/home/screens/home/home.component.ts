import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  isVisibleIntro: boolean = true;

  constructor(
    private router: Router
  ) {}

  register() {
    this.router.navigate(['register']);
  }

}
