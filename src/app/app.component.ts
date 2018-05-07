import { Component, OnInit } from '@angular/core';

import { User } from './user';
import { FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user = new User('', '');
  userForm: FormGroup;
  name: FormControl;
  password: FormControl;
  title = 'app';
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }
  createForm() {
    this.userForm = new FormGroup({
      name: this.name,
      password: this.password,
    });
  }
  createFormControls() {
    this.name = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
  }
  onSubmit() {
    if (this.userForm.valid) {
      alert(JSON.stringify('Welcome ' + this.name.value ));
      this.userForm.reset();
    } else {
      console.log(this.userForm);
    }
  }
}
