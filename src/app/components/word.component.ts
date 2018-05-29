import { Component } from '@angular/core';

@Component({
  selector: 'app-word',
  template: `
    <h3>Word Component</h3>
    <h4 class="{{ count % 2 === 0 ? 'text-danger' : 'text-success' }}">
      Count = {{ count }}
    </h4>
    <button class="btn btn-success" (click)="increase();">Increase</button>
    <button class="btn btn-danger" (click)="descrease();">Descrease</button>
    <button class="btn btn-warning" (click)="reset();">Reset</button>
    <hr>
    <div class="word">
      <h3 class="{{ word.isMemorized ? 'text-danger' : 'text-success' }}">
        {{ word.en }}
      </h3>
      <p>{{ word.vn }}</p>
      <button class="{{ word.isMemorized ? 'btn btn-success': 'btn btn-danger' }}" (click)="toggle();">
        {{ word.isMemorized ? 'Forgot': 'Memorized' }}
      </button>
    </div>
  `
})

export class WordComponent {
  word: Word = { _id: 'a', en: 'One', vn: 'Mot', isMemorized: false };
  count = 1;

  increase() { this.count++; }
  descrease() { this.count--; }
  reset() { this.count = 1; }
  toggle() { this.word.isMemorized = !this.word.isMemorized; }
}

interface Word {
  _id: string;
  en: string;
  vn: string;
  isMemorized: boolean;
}
