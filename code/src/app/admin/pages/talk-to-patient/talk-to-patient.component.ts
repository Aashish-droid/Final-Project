import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-talk-to-patient',
  templateUrl: './talk-to-patient.component.html',
  styleUrls: ['./talk-to-patient.component.css']
})
export class TalkToPatientComponent implements OnInit, OnDestroy {

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
    this.communicationService.sendMessage(message, 'admin', 'user').subscribe(() => {
      this.messages.push({
        message: message,
        sender: 'admin',
        receiver: 'user'
      });
      this.newMessage = '';
    });
  }
}
