import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  template: `
    <div class="container" style="margin-top: 10px">
      <p>Pipe component</p>
      <pre>{{ person | json | uppercase }}</pre>
      <pre>{{ nameUppercase }}</pre>
      <pre>{{ name | lowercase }}</pre>
      <pre>{{ name | titlecase }}</pre>
      <pre>{{ x | round }}</pre>
    </div>
  `
})

export class PipeComponent {
  person = { name: 'Teo Nguyen', age: 10 };
  name = 'Ti NgUyen AbCCCCd';
  x = 1.49;
  get nameUppercase() { return this.name.toUpperCase(); }
}
