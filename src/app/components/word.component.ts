import { Component } from '@angular/core';

@Component({
  selector: 'app-word',
  template: `
    <h3>Word Component</h3>
    <h4>Count = {{ count }}</h4>
    <button class="btn btn-success" (click)="increase();">Increase</button>
    <button class="btn btn-danger" (click)="descrease();">Descrease</button>
    <button class="btn btn-warning" (click)="reset();">Reset</button>
  `
})

export class WordComponent {
  count = 1;

  increase() { this.count++; }
  descrease() { this.count--; }
  reset() { this.count = 1; }
}
