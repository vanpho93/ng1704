import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Word, AppState } from '../types';

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
    constructor(private store: Store<AppState>) {
        this.store.select('shouldShowForm')
            .subscribe(s => this.shouldShowForm = s);
    }

    toggleForm() { this.store.dispatch({ type: 'TOGGLE_FORM' }); }

    addWord() {
        const word: Word = {
            _id: Date.now() + '',
            en: this.txtEn,
            vn: this.txtVn,
            isMemorized: false
        };
        this.store.dispatch({ type: 'ADD_WORD', word });
        this.txtEn = '';
        this.txtVn = '';
    }
}
