import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h3>Parent Component</h3>
    <h4>Count = 0</h4>
    <app-child></app-child>
  `
})

export class ParentComponent {}
// ----------------------------------
@Component({
    selector: 'app-child',
    template: `
        <button class="btn btn-success">Increase</button>
        <button class="btn btn-danger">Decrease</button>
        <button class="btn btn-warning">Reset</button>
    `
})

export class ChildComponent {}
