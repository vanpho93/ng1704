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

    removeWord(_id: string) {
        return this.http.delete('https://word1203.herokuapp.com/word/' + _id)
        .toPromise()
        .then(response => response.json())
        .then(resJson => this.store.dispatch({ type: 'REMOVE_WORD', _id }));
    }

    addWord(en: string, vn: string) {
        return this.http.post('https://word1203.herokuapp.com/word/', { en, vn })
        .toPromise()
        .then(response => response.json())
        .then(resJson => this.store.dispatch({ type: 'ADD_WORD', word: resJson.word }));
    }

    toggleWord(_id: string, isMemorized: boolean) {
        return this.http.put('https://word1203.herokuapp.com/word/' + _id, { isMemorized })
        .toPromise()
        .then(response => response.json())
        .then(resJson => this.store.dispatch({ type: 'TOGGLE_WORD', _id }));
    }
}
