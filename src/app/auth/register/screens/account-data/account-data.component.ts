import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';
import { DocumentType } from '../../interfaces/document-types.interface';
import { Gender } from '../../interfaces/gender.interface';
import { StorageService } from 'src/app/shared/services/storage-service.service';
import { Payload } from 'src/app/shared/crypto_data/payload';
import { ValidatorService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-account-data',
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.scss'],
})
export class AccountDataComponent implements OnInit {

  documentTypes: DocumentType[] = []

  genders: Gender[] = []

  accountForm = this.fb.group({
    documentType: ["", Validators.required],
    documentNumber: ["", Validators.required],
    expirationDate: ["", [Validators.required, this.validatorService.currentDateValidator]],
    birthDate: ["", [Validators.required, this.validatorService.dateBirthValidator]],
    gender: ["", Validators.required],
    email: ["", [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    confirmEmail: ["", Validators.required],
    securityPin: ["", Validators.required],
    confirmSecurityPin: ["", Validators.required]
  }, {
    validators: [this.validatorService.matchFields("email", "confirmEmail"), this.validatorService.matchFields("securityPin", "confirmSecurityPin")]
  })

  isLoading: boolean = true;

  securityPinType: string = "password";
  securityConfirmPinType: string = "password";
  showPin: boolean = false;
  showConfirmPin: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService,
    private storageService: StorageService,
    private validatorService: ValidatorService
  ) { }

  ngOnInit(): void {
    this.registerService.getDocumentTypes()
      .subscribe(documents => {
        if (documents && documents.length > 0) {
          this.documentTypes = documents;
        }
      })

    this.registerService.getGender()
      .subscribe(res => this.genders = res)
  }

  save() {
    
    const localAccountInfo = this.registerService.getLocalAccountInfo("userdata", this.accountForm);

    this.storageService.setLocalStorage(
      "account_info",
      localAccountInfo
    )
    
    this.router.navigate(["/register/terms"]);
  }

  isInvalidField(field: string) {
    return this.accountForm.get(field)?.invalid && this.accountForm.get(field)?.touched;
  }


  showSecurityPin() {
    this.showPin = !this.showPin;
    if (this.showPin) {
      this.securityPinType = 'text';
    }
    else {
      this.securityPinType = 'password';
    }
  }

  showConfirmSecurityPin() {
    this.showConfirmPin = !this.showConfirmPin;
    if (this.showConfirmPin) {
      this.securityConfirmPinType = 'text';
    }
    else {
      this.securityConfirmPinType = 'password';
    }
  }

}
