import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Word, AppState } from '../types';
import { WordService } from '../services/word.service';

@Component({
    selector: 'app-word-form',
    template: `
      <button class="btn btn-success" *ngIf="!shouldShowForm" style="margin-bottom: 10px" (click)="toggleForm();">
        +
      </button>
      <div class="word form-group" style="width: 200px" *ngIf="shouldShowForm">
          <input placeholder="English" class="form-control" [(ngModel)]="txtEn"/>
          <br />
          <input placeholder="Vietnamese" class="form-control" [(ngModel)]="txtVn"/>
          <br />
          <div class="btn-container">
              <button class="btn btn-success" (click)="addWord();">
                  Add word
              </button>
              <button class="btn btn-danger" (click)="toggleForm();">
                  Cancel
              </button>
          </div>
      </div>
    `
})

export class WordFormComponent {
    txtEn = '';
    txtVn = '';
    shouldShowForm: boolean;
    constructor(private store: Store<AppState>, private wordService: WordService) {
        this.store.select('shouldShowForm')
            .subscribe(s => this.shouldShowForm = s);
    }

    toggleForm() { this.store.dispatch({ type: 'TOGGLE_FORM' }); }

    addWord() {
        this.wordService.addWord(this.txtEn, this.txtVn);
        this.txtEn = '';
        this.txtVn = '';
    }
}
