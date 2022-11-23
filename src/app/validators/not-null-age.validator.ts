import {AbstractControl, ValidationErrors} from "@angular/forms";

export function notNullAgeValidator(control: AbstractControl): ValidationErrors | null {
  return control.value === 'null'
  ? { notNullAge: true }
  : null;
}
