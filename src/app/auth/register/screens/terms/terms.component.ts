import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { StorageService } from 'src/app/shared/services/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
})
export class TermsComponent {

  termsForm = this.fb.group({
    conditions: [false, Validators.requiredTrue]
  })

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService,
    private storageService: StorageService
  ) { }

  save() {
    const localAccountInfo = this.registerService.getLocalAccountInfo("terms", this.termsForm);

    this.storageService.setLocalStorage(
      "account_info",
      localAccountInfo
    )

    this.router.navigate(["welcome"])
  }
}
