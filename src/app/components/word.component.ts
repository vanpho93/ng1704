import { Component } from '@angular/core';
import { Word } from '../types';

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
      <button class="btn btn-success" (click)="toggle();" *ngIf="word.isMemorized">
        Forgot
      </button>
      <button class="btn btn-danger" (click)="toggle();" *ngIf="!word.isMemorized">
        Memorized
      </button>
      <br>
      <br>
      <button class="btn btn-primary" disabled="false">SHOW</button>
      <img [src]="imageSrc" />
      </div>
  `
})

export class WordComponent {
  word: Word = { _id: 'a', en: 'One', vn: 'Mot', isMemorized: false };
  count = 1;
  imageSrc = 'https://zmp3-static.zadn.vn/skins/zmp3-v5.1/images/logo.png';
  increase() { this.count++; }
  descrease() { this.count--; }
  reset() { this.count = 1; }
  toggle() { this.word.isMemorized = !this.word.isMemorized; }
}
