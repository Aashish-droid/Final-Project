import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-learnmore',
  templateUrl: './learnmore.component.html',
  styleUrls: ['./learnmore.component.css']
})
export class LearnmoreComponent {
  id:any;
  learnmore:any;
  constructor(private hs:ServicesService,private ar:ActivatedRoute){
    this.ar.params.subscribe(
      {
        next:(params)=>{
          this.id=params['id']
          this.readData()
        },
        error:()=>this.id =0
      }
    )
  }

  readData(){
    this.hs.getLearnmoreById(this.id).subscribe({
      next:(data:any)=>this.learnmore=data,
      error:()=>this.learnmore={}
    })
  }
}
