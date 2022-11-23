import {AbstractControl, ValidationErrors} from "@angular/forms";

const companies = ['google', 'facebook', 'twitter'];

export function bannedCompanyValidator(control: AbstractControl): ValidationErrors | null {
  return companies.includes(control.value.toLocaleLowerCase())
  ? { bannedCompany: true }
  : null;
}
