import { Injectable } from '@angular/core';

@Injectable()

export class WordService {
    showWord(word) {
        alert(JSON.stringify(word));
    }
}
