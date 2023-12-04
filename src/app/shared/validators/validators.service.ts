import { Injectable } from "@angular/core";
import { FormControl, ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class ValidatorService {

  // Custom validator for tel number (because not reading Validators.maxLenght or Validators.minLenght)
  telValidator (control: FormControl): ValidationErrors | null {
    const value: string = control.value?.toString();
    if (value && value.length !== 10) {
      return { invalidTel: true };
    }

    return null;
  }
}