import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { DocumentType } from '../interfaces/document-types.interface';
import { Payload } from 'src/app/shared/crypto_data/payload';
import { PayloadInt } from 'src/app/shared/crypto_data/interfaces/payload.interface';
import { Gender } from '../interfaces/gender.interface';
import { StorageService } from 'src/app/shared/services/storage-service.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  // Estas variables deben estar en enviroment.ts en prod
  private _baseUrl: string = "https://api.bancoink.biz/qa/signup";
  private _apiKey: string = "030106";

  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) { }


  getDocumentTypes(): Observable<DocumentType[]> {
    return this.http.get<DocumentType[]>(`${this._baseUrl}/documentTypes?apiKey=${this._apiKey}`)
  }

  getGender(): Observable<Gender[]> {
    const payload = this.http.get<PayloadInt>(`${this._baseUrl}/genders?apiKey=${this._apiKey}`);
    let genders: Gender[] = [];
    
    return payload.pipe(
      map((response) => {
        if (response && response.payload) {
          genders = Payload.decrypt(response.payload)
        }
        return genders
    })
    )
  }

  getLocalAccountInfo(formType: string, formValue: FormGroup) {

    const accountInfo = this.storageService.getLocalStorage("account_info");

    let newAccountInfo = {}
    
    const payloadInstance = new Payload(formValue.value);

    if (accountInfo) {
      newAccountInfo = {
        ...accountInfo,
        [formType]: payloadInstance.toJSON().payload
      }
    }
    else {
      newAccountInfo = {
        [formType]: payloadInstance.toJSON().payload
      }
    }
    
    return newAccountInfo;
  }
}
