import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterInfo } from 'src/app/auth/register/interfaces/regiterInfo.interface';
import { Payload } from 'src/app/shared/crypto_data/payload';
import { StorageService } from 'src/app/shared/services/storage-service.service';

@Component({
  selector: 'app-wecolme',
  templateUrl: './wecolme.component.html',
  styleUrls: ['./wecolme.component.scss'],
})
export class WecolmeComponent  implements OnInit {

  registerInfo!: RegisterInfo;

  constructor(
    private router: Router,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {

    try {
      const encryptAccountInfo = this.storageService.getLocalStorage("account_info")
      if (encryptAccountInfo) {
        let decryptTel = Payload.decrypt(encryptAccountInfo.tel);
        let decryptUserData = Payload.decrypt(encryptAccountInfo.userdata);
        let decryptTerms = Payload.decrypt(encryptAccountInfo.terms);
  
        this.registerInfo = {
          tel: decryptTel,
          userdata: decryptUserData,
          terms: decryptTerms
        }
  
        console.log("Información del registro", this.registerInfo)
      }
    } catch (error) {
      
    }

  }

  continue() {
    this.router.navigate(["home"])
  }
}
