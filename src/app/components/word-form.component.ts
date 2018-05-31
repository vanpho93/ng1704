import { Component } from '@angular/core';

@Component({
    selector: 'app-word-form',
    template: `
        <h4>Word Form Component</h4>
        <div class="form-group" style="width: 200px">
            <input placeholder="English" class="form-control" [(ngModel)]="txtEn"/>
            <br />
            <input placeholder="Vietnamese" class="form-control" [(ngModel)]="txtVn"/>
            <br />
            <div class="btn-container">
                <button class="btn btn-success" (click)="addWord();">
                    Add word
                </button>
                <button class="btn btn-danger">
                    Cancel
                </button>
            </div>
            <pre>en: {{ txtEn }} | vn: {{ txtVn }}</pre>
        </div>
    `
})

export class WordFormComponent {
    txtEn = '';
    txtVn = '';

    addWord() {
        alert(`en: ${this.txtEn}, vn: ${this.txtVn}`);
    }
}
