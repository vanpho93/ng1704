import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h3>Parent Component</h3>
    <h4>Count = {{ count }}</h4>
    <app-child></app-child>
  `
})

export class ParentComponent {
    count = 1;
}

@Component({
    selector: 'app-child',
    template: `
        <button class="btn btn-success">Increase</button>
        <button class="btn btn-danger">Decrease</button>
        <button class="btn btn-warning">Reset</button>
    `
})

export class ChildComponent {}
