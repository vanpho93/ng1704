import { Component, OnInit, ViewChild } from '@angular/core';
import { WordFilterComponent } from './word-filter.component';
import { Word } from '../types';
import { WordService } from '../services/word.service';

@Component({
  selector: 'app-list-word',
  template: `
    <h3>List Word Component</h3>
    <app-word-form
      [shouldShowForm]="shouldShowForm"
      (onToggleForm)="onToggleForm();"
      (onAddWord)="onAddWord($event);"
    ></app-word-form>
    <app-word-filter></app-word-filter>
    <app-word
      *ngFor="let word of filteredWords"
      [wordInfo]="word"
      (onRemoveWord)="onRemoveWord($event)"
      (onToggleWord)="onToggleWord($event)"
    ></app-word>
  `
})

export class ListWordComponent {
  constructor(private wordService: WordService) {
    this.wordService.getAllWords();
  }

  @ViewChild(WordFilterComponent) filterComponent: WordFilterComponent;
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

  onRemoveWord(_id: string) {
    const index = this.words.findIndex(w => w._id === _id);
    this.words.splice(index, 1);
  }

  onToggleWord(_id: string) {
    const word = this.words.find(w => w._id === _id);
    word.isMemorized = !word.isMemorized;
  }

  onAddWord(word: Word) {
    this.words.unshift(word);
    this.shouldShowForm = false;
  }

  get filteredWords(): Word[] {
    const {filterMode} = this.filterComponent;
    return this.words.filter(w => {
      if (filterMode === 'SHOW_ALL') return true;
      if (filterMode === 'SHOW_MEMORIZED') return w.isMemorized;
      return !w.isMemorized;
    });
  }
}
