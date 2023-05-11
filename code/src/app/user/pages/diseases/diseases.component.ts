import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css']
})
export class DiseasesComponent {
  diseaseslist:any;
  searchTerm: string = '';
  
  constructor(private hs:ServicesService){
    this.hs.getDiseases().subscribe(
      {
        next: (data:any)=> this.diseaseslist =data,
        error: ()=> this.diseaseslist=[]
      }
    )
  }
}
