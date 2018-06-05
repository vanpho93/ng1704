import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  template: `
    <div class="container" style="margin-top: 10px">
      <input class="form-control" placeholder="Enter your message" />
      <br>
      <button class="btn btn-success">Send Message</button>
    </div>
  `
})

export class ChatComponent {
}
