import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(
    private localStorageService: LocalStorageService
  ) { }

  setLocalStorage(key: string, value: any, timeout: number = 0) {
    if (value != null) {
      this.localStorageService.set(key, value, timeout, "t");
    }
  }

  getLocalStorage(key: string) {
    return this.localStorageService.get(key);
  }
}
