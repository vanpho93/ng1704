import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Store } from '@ngrx/store';
import { AppState } from '../types';

@Injectable()

export class WordService {
    constructor(private http: Http, private store: Store<AppState>) {}

    getAllWords() {
        return this.http.get('https://word1203.herokuapp.com/word')
        .toPromise()
        .then(response => response.json())
        .then(resJson => this.store.dispatch({ type: 'SET_WORDS', words: resJson.words }));
    }
}
