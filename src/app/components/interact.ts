import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-parent',
  template: `
    <h3>Parent Component</h3>
    <h4>Count = {{ myCount }}</h4>
    <app-child></app-child>
  `
})

export class ParentComponent {
  myCount: number;
  constructor(private store: Store<{ count: number }>) {
    this.store.select('count').subscribe(count => this.myCount = count);
  }
}
// ----------------------------------
@Component({
    selector: 'app-child',
    template: `
        <button class="btn btn-success" (click)="increase();">Increase</button>
        <button class="btn btn-danger" (click)="decrease();">Decrease</button>
        <button class="btn btn-warning" (click)="reset();">Reset</button>
    `
})

export class ChildComponent {
  constructor(private store: Store<{ count: number }>) {}

  increase() { this.store.dispatch({ type: 'INCREASE' }); }
  decrease() { this.store.dispatch({ type: 'DECREASE' }); }
  reset() { this.store.dispatch({ type: 'RESET' }); }
}
