import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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
    private fb: FormBuilder
  ) { }

  save() {
    console.log(this.termsForm.value)
  }
}
