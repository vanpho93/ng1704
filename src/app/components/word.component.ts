import { Component } from '@angular/core';

@Component({
  selector: 'app-word',
  template: `
    <h3>Word Component</h3>
    <h4>Count = {{ count }}</h4>
    <button class="btn btn-success" (click)="increase();">Increase</button>
    <button class="btn btn-danger" (click)="descrease();">Descrease</button>
    <button class="btn btn-warning" (click)="reset();">Reset</button>
    <hr>
    <div class="word">
      <h3>{{ word.en }}</h3>
      <p>{{ word.vn }}</p>
    </div>
  `
})

export class WordComponent {
  word: Word = { _id: 'a', en: 'One', vn: 'Mot', isMemorized: false };
  count = 1;

  increase() { this.count++; }
  descrease() { this.count--; }
  reset() { this.count = 1; }
}

interface Word {
  _id: string;
  en: string;
  vn: string;
  isMemorized: boolean;
}
