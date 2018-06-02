import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class WordService {
    constructor(private http: Http) {}

    getAllWords() {
        return this.http.get('https://word1203.herokuapp.com/word')
        .toPromise()
        .then(response => response.json());
    }
}
