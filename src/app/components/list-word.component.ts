import { Component, OnInit } from '@angular/core';
import { Word } from '../types';

@Component({
  selector: 'app-list-word',
  template: `
    <h3>List Word Component</h3>
    <pre>{{ words | json }}</pre>
  `
})

export class ListWordComponent {
  words: Word[] = [
    { _id: 'a', en: 'One', vn: 'Mot', isMemorized: false },
    { _id: 'b', en: 'Two', vn: 'Hai', isMemorized: true },
    { _id: 'c', en: 'Three', vn: 'Ba', isMemorized: true },
    { _id: 'd', en: 'Four', vn: 'Bon', isMemorized: false },
  ];
}
