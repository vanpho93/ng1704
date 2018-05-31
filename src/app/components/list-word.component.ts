import { Component, OnInit } from '@angular/core';
import { Word } from '../types';

@Component({
  selector: 'app-list-word',
  template: `
    <h3>List Word Component</h3>
    <app-word-form
      [shouldShowForm]="shouldShowForm"
      (onToggleForm)="onToggleForm();"
    ></app-word-form>
    <app-word-filter></app-word-filter>
    <app-word *ngFor="let word of words" [wordInfo]="word"></app-word>
  `
})

export class ListWordComponent {
  words: Word[] = [
    { _id: 'a', en: 'One', vn: 'Mot', isMemorized: false },
    { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: true },
    { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: true },
    { _id: 'd', en: 'Four', vn: 'Bon', isMemorized: false },
  ];
  shouldShowForm = false;

  onToggleForm() {
    this.shouldShowForm = !this.shouldShowForm;
  }
}
