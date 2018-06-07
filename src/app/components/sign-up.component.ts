import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';

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
      {{ emailErrorMessage }}
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
    <input
      class="form-control"
      placeholder="Re-enter Password"
      formControlName="rePassword"
      type="password"
    />
    <i style="color: red; margin: 10px; display: block;" *ngIf="isRePasswordValid">
      {{ rePasswordErrorMessage }}
    </i>
    <br *ngIf="!isRePasswordValid">
    <button class="btn btn-success" [disabled]="formSignUp.invalid">
      Sign In
    </button>
  </form>
  <pre>{{ formSignUp.value | json }}</pre>
  <pre>Valid: {{ formSignUp.valid }}</pre>
  <pre>errors: {{ formSignUp.errors | json }}</pre>
  `,
  styles: [`input.ng-touched.ng-invalid { border: solid 1px red; }`]
})

export class SignUpComponent {
  formSignUp: FormGroup;

  constructor() {
    this.formSignUp = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, gmail]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
      rePassword: new FormControl('', [Validators.required, Validators.minLength(3)])
    }, mustMatch);
  }

  signIn() {
    alert(JSON.stringify(this.formSignUp.value));
  }

  get isPasswordValid() {
    const control = this.formSignUp.get('password');
    return control.invalid && control.touched;
  }

  get isEmailValid() {
    const control = this.formSignUp.get('email');
    return control.invalid && control.touched;
  }

  get emailErrorMessage(): string {
    const { errors } = this.formSignUp.get('email');
    if (errors.required) return 'Bạn cần nhập email';
    if (errors.email) return 'Email không hợp lệ';
    if (errors.gmail) return 'Email phải là gmail';
    return null;
  }

  get rePasswordErrorMessage(): string {
    const { errors } = this.formSignUp.get('rePassword');
    if (errors.required) return 'Bạn cần nhập lại password';
    if (errors.minlength) return 'Password cần tối thiểu 3 ký tự';
    if (this.formSignUp.errors && this.formSignUp.errors.mustMatch) {
      return 'Password phải khớp';
    }
    return null;
  }

  get isRePasswordValid() {
    const control = this.formSignUp.get('rePassword');
    const isNotMatched = this.formSignUp.errors && this.formSignUp.errors.mustMatch;
    return control.touched && (control.invalid || isNotMatched);
  }
}

function gmail(email: FormControl): ValidationErrors | null {
  const value: string = email.value.trim();
  if (value.endsWith('@gmail.com')) return null;
  return { gmail: true };
}

function mustMatch(formSignUp: FormGroup) {
  const password = formSignUp.get('password').value;
  const rePassword = formSignUp.get('rePassword').value;
  if (password === rePassword) return null;
  return { mustMatch: true };
}
