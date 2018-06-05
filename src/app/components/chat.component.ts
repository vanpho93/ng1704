import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  template: `
    <div class="container" style="margin-top: 10px">
      <input class="form-control" placeholder="Enter your message" [(ngModel)]="txtMessage" />
      <br>
      <button class="btn btn-success" (click)="sendMessage()">Send Message</button>
    </div>
  `
})

export class ChatComponent implements OnInit {
  txtMessage = '';
  socket = io('http://localhost:4000');

  ngOnInit() {
    this.socket.on('SERVER_SEND_MESSAGE', message => console.log(message));
  }

  sendMessage() {
    this.socket.emit('CLIENT_SEND_MESSAGE', this.txtMessage);
    this.txtMessage = '';
  }
}
