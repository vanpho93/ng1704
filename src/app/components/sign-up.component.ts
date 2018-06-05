import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  template: `
  <form class="form-group" style="width: 200px; margin-top: 10px" [formGroup]="formSignUp">
    <input
      class="form-control"
      placeholder="Email"
      formControlName="email"
    />
    <br>
    <input
      class="form-control"
      placeholder="Password"
      formControlName="password"
      type="password"
    />
    <br>
    <button class="btn btn-success">
      Sign In
    </button>
  </form>
  <pre>{{ formSignUp.value | json }}</pre>
  `,
})

export class SignUpComponent {
  formSignUp: FormGroup;

  constructor() {
    this.formSignUp = new FormGroup({
      email: new FormControl('teo@gmail.com'),
      password: new FormControl('123')
    });
  }
}
