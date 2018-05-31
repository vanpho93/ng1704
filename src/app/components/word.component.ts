import { Component } from '@angular/core';
import { Word } from '../types';

@Component({
  selector: 'app-word',
  template: `
  <div class="word">
    <div class="word-container">
      <h3 class="text-success">{{ word.en }}</h3>
      <h3 class="text-danger">{{ word.vn }}</h3>
    </div>
    <div class="btn-container">
      <button class="btn btn-success" *ngIf="word.isMemorized">Forgot</button>
      <button class="btn btn-danger" *ngIf="!word.isMemorized">Memorized</button>
      <button class="btn btn-warning">
        Remove
      </button>
    </div>
  </div>
  `
})

export class WordComponent {
  word: Word = { _id: 'a', en: 'One', vn: 'Mot', isMemorized: false };
}
