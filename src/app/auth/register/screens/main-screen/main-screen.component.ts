import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderLink } from '../../interfaces/header-link.interface';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss'],
})
export class MainScreenComponent implements AfterViewChecked {

  activeLink: HeaderLink | undefined;

  headerLinks = [
    {
      title: "NÚMERO CELULAR",
      path: "/register",
      step: 1
    },
    {
      title: "DATOS DE CUENTA",
      path: "/register/userdata",
      step: 2
    },
    {
      title: "FINALIZAR",
      path: "/register/terms",
      step: 3
    },
  ]

  constructor(
    private router: Router
  ) {}

  ngAfterViewChecked(): void {
    this.activeLink = this.headerLinks.find(link => link.path === this.router.url)
  }

  getMainTitle() {
    const headerActiveLink = this.headerLinks.find(link => link.path === this.activeLink?.path)
    return headerActiveLink?.title;
  }

  isActiveStep(step: number): boolean {
    if ( this.activeLink?.step ) {
      return step <= this.activeLink.step;
    }
    return false;
  }

  showHeader(): boolean {
    return this.activeLink ? true : false;
  }

}
