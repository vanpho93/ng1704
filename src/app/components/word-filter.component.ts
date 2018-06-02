import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-word-filter',
  template: `
    <select
      class="form-control"
      style="width: 200px" value="{{ filterMode }}"
      (change)="setFilterMode($event.target.value)"
    >
      <option value="SHOW_ALL">SHOW ALL</option>
      <option value="SHOW_FORGOT">SHOW FORGOT</option>
      <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
    </select>
  `
})

export class WordFilterComponent {
  filterMode: string;
  constructor(private store: Store<any>) {
    this.store.select('filterMode').subscribe(f => this.filterMode = f);
  }

  setFilterMode(filterMode: string) {
    this.store.dispatch({ type: 'SET_FILTER_MODE', filterMode });
  }
}
