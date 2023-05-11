import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  explorelist:any;

  constructor(private hs:ServicesService){
    this.hs.getExplore().subscribe(
      {
        next: (data:any)=> this.explorelist =data,
        error: ()=> this.explorelist=[]
      }
    )
  }
}
