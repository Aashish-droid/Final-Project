import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  feedbacks:any
        constructor(private fs:ServicesService)  {
           this.fs.getFeedbacks().subscribe(
              {
                  next : (data:any)=> this.feedbacks =data
              }
           )
        }
}
