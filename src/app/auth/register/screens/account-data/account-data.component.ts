import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.scss'],
})
export class AccountDataComponent {

  accountForm = this.fb.group({
    documentType: ["", Validators.required],
    documentNumber: ["", Validators.required],
    expirationDate: ["", Validators.required],
    birthDate: ["", Validators.required],
    gender: ["", Validators.required],
    email: ["", Validators.required],
    confirmEmail: ["", Validators.required],
    securityPin: ["", Validators.required],
    confirmSecurityPin: ["", Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  save() {
    console.log(this.accountForm.value)
    this.router.navigate(["/register/terms"]);
  }

}
