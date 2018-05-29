import { Component, OnInit } from '@angular/core';
import { Word } from '../types';

@Component({
  selector: 'app-list-word',
  template: `
    <h3>List Word Component</h3>
    <div class="word" *ngFor="let word of words">
      <div class="word-container">
        <h3 class="text-success">{{ word.en }}</h3>
        <h3 class="text-danger">{{ word.vn }}</h3>
      </div><div class="btn-container">
        <button class="btn btn-success" *ngIf="word.isMemorized" (click)="toggleWord(word._id);">Forgot</button>
        <button class="btn btn-danger" *ngIf="!word.isMemorized" (click)="toggleWord(word._id);">Memorized</button>
        <button class="btn btn-warning" (click)="removeWord(word._id);">
          Remove
        </button>
      </div>
    </div>
  `,
  styles: [`
      .word {
        width: 200px;
        display: flex;
        flex-direction: column;
        background-color: #F0F0F0;
        border-radius: 5px;
        padding: 10px;
        margin-top: 10px;
    }
    .word-container, .btn-container {
        align-items: flex-end;
        display: flex;
        justify-content: space-around;
    }
  `]
})

export class ListWordComponent {
  words: Word[] = [
    { _id: 'a', en: 'One', vn: 'Mot', isMemorized: false },
    { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: true },
    { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: true },
    { _id: 'd', en: 'Four', vn: 'Bon', isMemorized: false },
  ];

  removeWord(_id: string) {
    const index = this.words.findIndex(w => w._id === _id);
    this.words.splice(index, 1);
  }

  toggleWord(_id: string) {
    const word = this.words.find(w => w._id === _id);
    word.isMemorized = !word.isMemorized;
  }
}
