import { Component } from '@angular/core';

@Component({
    selector: 'app-word-form',
    template: `
      <button class="btn btn-success" *ngIf="!shouldShowForm" (click)="toggleForm();" style="margin-bottom: 10px">
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
    shouldShowForm = false;

    toggleForm() {}
}
