import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  template: `
  <form class="form-group" style="width: 200px; margin-top: 10px">
    <input
      class="form-control"
      placeholder="Email"
    />
    <br>
    <input
      class="form-control"
      placeholder="Password"
      type="password"
    />
    <br>
    <button class="btn btn-success">
      Sign In
    </button>
  </form>
  `,
})

export class SignUpComponent { }
