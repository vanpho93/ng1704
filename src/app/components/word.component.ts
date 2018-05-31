import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Word } from '../types';

@Component({
  selector: 'app-word',
  template: `
  <div class="word">
    <div class="word-container">
      <h3 class="text-success">{{ wordInfo.en }}</h3>
      <h3 class="text-danger">{{ wordInfo.vn }}</h3>
    </div>
    <div class="btn-container">
      <button class="btn btn-success" *ngIf="wordInfo.isMemorized" (click)="onToggleWord.emit(wordInfo._id)">Forgot</button>
      <button class="btn btn-danger" *ngIf="!wordInfo.isMemorized" (click)="onToggleWord.emit(wordInfo._id)">Memorized</button>
      <button class="btn btn-warning" (click)="onRemoveWord.emit(wordInfo._id)">
        Remove
      </button>
    </div>
  </div>
  `
})

export class WordComponent {
  @Input() wordInfo: Word;
  @Output() onRemoveWord = new EventEmitter<string>();
  @Output() onToggleWord = new EventEmitter<string>();
}
