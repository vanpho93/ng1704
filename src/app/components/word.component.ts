import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Word } from '../types';

@Component({
  selector: 'app-word',
  template: `
  <div class="word">
    <div class="word-container">
      <h3 class="text-success">{{ wordInfo.en }}</h3>
      <h3 class="text-danger">{{ wordInfo.isMemorized ? '******' : wordInfo.vn }}</h3>
    </div>
    <div class="btn-container">
      <button class="btn btn-success" *ngIf="wordInfo.isMemorized" (click)="toggleWord();">Forgot</button>
      <button class="btn btn-danger" *ngIf="!wordInfo.isMemorized" (click)="toggleWord();">Memorized</button>
      <button class="btn btn-warning" (click)="removeWord();">
        Remove
      </button>
    </div>
  </div>
  `
})

export class WordComponent {
  @Input() wordInfo: Word;

  constructor(private store: Store<any>) {}

  removeWord() {
    this.store.dispatch({ type: 'REMOVE_WORD', _id: this.wordInfo._id });
  }

  toggleWord() {
    this.store.dispatch({ type: 'TOGGLE_WORD', _id: this.wordInfo._id });
  }
}
