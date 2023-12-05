import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent  implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // Simulate Calls API - etc
    setTimeout(() => this.goHome(), 1500);
  }

  goHome() {
    this.router.navigate(["home"])
  }

}
