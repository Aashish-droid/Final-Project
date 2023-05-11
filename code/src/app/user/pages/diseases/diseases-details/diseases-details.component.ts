import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-diseases-details',
  templateUrl: './diseases-details.component.html',
  styleUrls: ['./diseases-details.component.css']
})
export class DiseasesDetailsComponent {
  id:any;
  details:any;
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
    this.hs.getDiseasesById(this.id).subscribe({
      next:(data:any)=>this.details=data,
      error:()=>this.details={}
    })
  }
}
