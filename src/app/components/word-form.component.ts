import { Component } from '@angular/core';

@Component({
    selector: 'app-word-form',
    template: `
        <h4>Word Form Component</h4>
        <div class="form-group" style="width: 200px">
            <input placeholder="English" class="form-control" />
            <br />
            <input placeholder="Vietnamese" class="form-control" />
            <br />
            <div class="btn-container">
                <button class="btn btn-success">
                    Add word
                </button>
                <button class="btn btn-danger">
                    Cancel
                </button>
            </div>
        </div>
    `
})

export class WordFormComponent {}
