import { Injectable } from "@angular/core";
import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class ValidatorService {

  // Email pattern validator
  public emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  // Custom validator for tel number (because not reading Validators.maxLenght or Validators.minLenght)
  telValidator (control: FormControl): ValidationErrors | null {
    const value: string = control.value?.toString();
    if (value && value.length !== 10) {
      return { invalidTel: true };
    }

    return null;
  }

  // Validates that the date entered is 7 years less than the current date (Minimum age for type of identity card document)
  dateBirthValidator (control: FormControl): ValidationErrors | null {
    const value = control.value;
    if (value) {
      const valueDate = new Date(value);
      const currentDate = new Date();

      const minValidDate = new Date(currentDate.setFullYear(currentDate.getFullYear() - 7))

      if (valueDate > minValidDate) {
        return {invalidDate: true}
      }

      return null;
    }
    return null
  }

  // Validates that the date entered is less than current Date
  currentDateValidator (control: FormControl): ValidationErrors | null {
    const value = control.value;
    if (value) {
      const valueDate = new Date(value);
      const currentDate = new Date();

      if (valueDate > currentDate) {
        return {invalidDate: true}
      }

      return null;
    }
    return null
  }

  // Validates that two fileds matching
  matchFields(field1: string, field2: string) {

    return (control: AbstractControl): ValidationErrors | null => {
      const pass1 = control.get(field1)?.value;
      const pass2 = control.get(field2)?.value;

      if(pass1 !== pass2) {
        control.get(field2)?.setErrors({noMatch: true});
        return {noMatch: true}
      }
      
      control.get(field2)?.setErrors(null);
      return null;
    }
  }
}