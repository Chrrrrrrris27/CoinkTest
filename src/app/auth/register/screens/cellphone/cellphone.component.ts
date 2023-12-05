import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Payload } from 'src/app/shared/crypto_data/payload';
import { StorageService } from 'src/app/shared/services/storage-service.service';
import { ValidatorService } from 'src/app/shared/validators/validators.service';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-cellphone',
  templateUrl: './cellphone.component.html',
  styleUrls: ['./cellphone.component.scss'],
})
export class CellphoneComponent {

  telForm = this.fb.group({
    tel: ["", [Validators.required, this.validatorService.telValidator]]
  })

  cellValue: number = 0;

  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private validatorService: ValidatorService,
    private storageService: StorageService,
    private registerService: RegisterService
    ) { }
    
  isLongerNumber() {
    let value = this.telForm.controls.tel.value ? this.telForm.controls.tel.value.toString() : ""

    if (value && value.length > 10) {
    return true;
    }
    return false;
  }


  saveNumber() {

    const localAccountInfo = this.registerService.getLocalAccountInfo("userdata", this.telForm);

    this.storageService.setLocalStorage(
      "account_info",
      localAccountInfo
    )
    
    this.router.navigate(["/register/userdata"])
  }

}
