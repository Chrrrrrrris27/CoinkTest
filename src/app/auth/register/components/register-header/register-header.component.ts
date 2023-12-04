import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-register-header',
  templateUrl: './register-header.component.html',
  styleUrls: ['./register-header.component.scss'],
})
export class RegisterHeaderComponent {

  @Input() img: string = "";
  @Input() title: string = "";
  @Input() subtitle: string = "";

  constructor() { }

}
