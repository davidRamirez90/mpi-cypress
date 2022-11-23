import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.scss']
})
export class TestFormComponent implements OnInit {

  formGroup = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required]
    }),
    password: new FormControl('', {
      validators: [Validators.required]
    })
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log('submitting form');
    console.log(this.formGroup.getRawValue());
  }

}
