import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word',
  // templateUrl: './word.component.html',
  template: `
    <h3>Word Component</h3>
  `,
  // styles: [`h3 { color: green; }`]
  styleUrls: ['./word.component.css']
})
export class WordComponent implements OnInit {

  ngOnInit() {
  }

}
