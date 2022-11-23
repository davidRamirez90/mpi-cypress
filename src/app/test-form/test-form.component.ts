import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {bannedCompanyValidator} from "../validators/banned-company.validator";
import {notNullAgeValidator} from "../validators/not-null-age.validator";

interface AgeRange {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  ageRanges: Array<AgeRange> = [
    {value: '0-18', viewValue: '0-18'},
    {value: '19-25', viewValue: '19-25'},
    {value: '26-35', viewValue: '26-35'},
  ]

  constructor(private fb: FormBuilder) {}

  formGroup = this.fb.group({
    username: ['',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]
    ],
    company: ['',  [Validators.required, bannedCompanyValidator]],
    age: [null, [notNullAgeValidator]],
    password: ['', [Validators.required]]
  });

  ngOnInit(): void {
  }

  submitForm() {
    console.log('submitting form');
    console.log(this.formGroup.getRawValue());
  }

}
