import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-exploremore',
  templateUrl: './exploremore.component.html',
  styleUrls: ['./exploremore.component.css']
})
export class ExploremoreComponent {
  id:any;
  exploremore:any;
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
    this.hs.getExploremoreById(this.id).subscribe({
      next:(data:any)=>this.exploremore=data,
      error:()=>this.exploremore={}
    })
  }
}
