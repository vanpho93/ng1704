import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-chat',
  template: `
    <div class="container" style="margin-top: 10px">
      <input class="form-control" placeholder="Enter your message" [(ngModel)]="txtMessage" />
      <br>
      <button class="btn btn-success" (click)="sendMessage()">Send Message</button>
      <p class="text-info" *ngFor="let message of messages">{{ message }}</p>
    </div>
  `
})

export class ChatComponent implements OnInit {
  txtMessage = '';
  messages: string[] = [];
  socket = io('https://socket1704.herokuapp.com');

  ngOnInit() {
    this.socket.on('SERVER_SEND_MESSAGE', message => this.messages.push(message));
  }

  sendMessage() {
    this.socket.emit('CLIENT_SEND_MESSAGE', this.txtMessage);
    this.txtMessage = '';
  }
}
