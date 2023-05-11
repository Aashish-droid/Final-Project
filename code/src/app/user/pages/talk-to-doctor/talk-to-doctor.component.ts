import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { interval } from 'rxjs/internal/observable/interval';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-talk-to-doctor',
  templateUrl: './talk-to-doctor.component.html',
  styleUrls: ['./talk-to-doctor.component.css']
})
export class TalkToDoctorComponent implements OnInit{
  messages: any[] = [];
  newMessage = '';
  intervalSubscription: Subscription = new Subscription;
  
  constructor(private communicationService: ServicesService) { }

  ngOnInit(): void {
    this.loadMessages();
    // Fetch new messages every 5 seconds
    this.intervalSubscription = interval(1000).subscribe(() => {
      this.loadMessages();
    });
  }

  ngOnDestroy(): void {
    // Unsubscribe from interval to prevent memory leaks
    this.intervalSubscription.unsubscribe();
  }

  private loadMessages(): void {
    this.communicationService.getMessages().subscribe((data: any[]) => {
      this.messages = data.filter((message: { receiver: string; }) => message.receiver === 'user' || message.receiver === 'admin');
    });
  }
  sendMessage(message: string) {
    this.communicationService.sendMessage(message, 'user', 'admin').subscribe(() => {
      this.messages.push({
        message: message,
        sender: 'user',
        receiver: 'admin'
      });
      this.newMessage = ''; // clear the input field
    });
  }
}
