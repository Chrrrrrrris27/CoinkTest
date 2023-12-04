import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { Payload } from 'src/app/payload';
import { ValidatorService } from 'src/app/shared/validators/validators.service';

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
    private validatorService: ValidatorService
    ) { }
    
  isLongerNumber() {
    let value = this.telForm.controls.tel.value ? this.telForm.controls.tel.value.toString() : ""

    if (value && value.length > 10) {
    return true;
    }
    return false;
  }


  saveNumber() {
  // const payloadInstance = new Payload(this.telForm.value);
  // console.log(this.telForm.value)
  // console.log(payloadInstance.toJSON())
  // const result = payloadInstance.toJSON()

  // console.log(Payload.decrypt(result.payload))
  
  // this.router.navigate(["/register/userdata"])
}

}
