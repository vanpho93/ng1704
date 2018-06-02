import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { WordFilterComponent } from './word-filter.component';
import { Word } from '../types';
import { WordService } from '../services/word.service';

@Component({
  selector: 'app-list-word',
  template: `
    <h3>List Word Component</h3>
    <app-word-form></app-word-form>
    <app-word-filter></app-word-filter>
    <app-word
      *ngFor="let word of filteredWords"
      [wordInfo]="word"
    ></app-word>
  `
})

export class ListWordComponent {
  words: Word[];

  constructor(private wordService: WordService, private store: Store<any>) {
    this.wordService.getAllWords()
    .then(resJson => this.store.dispatch({ type: 'SET_WORDS', words: resJson.words }));
    this.store.select('words').subscribe(w => this.words = w);
  }

  get filteredWords(): Word[] {
    // const {filterMode} = this.filterComponent;
    const filterMode = 'SHOW_ALL';
    return this.words.filter(w => {
      if (filterMode === 'SHOW_ALL') return true;
      if (filterMode === 'SHOW_MEMORIZED') return w.isMemorized;
      return !w.isMemorized;
    });
  }
}
