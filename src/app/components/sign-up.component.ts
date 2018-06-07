import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  template: `
  <form
    class="form-group"
    style="width: 200px;
    margin-top: 10px"
    [formGroup]="formSignUp"
    (ngSubmit)="signIn();"
  >
    <input
      class="form-control"
      placeholder="Email"
      formControlName="email"
    />
    <i style="color: red; margin: 10px; display: block;" *ngIf="isEmailValid">
      Invalid Email
    </i>
    <br *ngIf="!isEmailValid">
    <input
      class="form-control"
      placeholder="Password"
      formControlName="password"
      type="password"
    />
    <i style="color: red; margin: 10px; display: block;" *ngIf="isPasswordValid">
      Invalid Password
    </i>
    <br *ngIf="!isPasswordValid">
    <button class="btn btn-success" [disabled]="formSignUp.invalid">
      Sign In
    </button>
  </form>
  <pre>{{ formSignUp.value | json }}</pre>
  <pre>Valid: {{ formSignUp.valid }}</pre>
  `,
})

export class SignUpComponent {
  formSignUp: FormGroup;

  constructor() {
    this.formSignUp = new FormGroup({
      email: new FormControl('teo@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl('123', [Validators.required, Validators.minLength(3)])
    });
  }

  signIn() {
    alert(JSON.stringify(this.formSignUp.value));
  }

  get isPasswordValid() {
    return this.formSignUp.get('password').invalid;
  }

  get isEmailValid() {
    return this.formSignUp.get('email').invalid;
  }
}
