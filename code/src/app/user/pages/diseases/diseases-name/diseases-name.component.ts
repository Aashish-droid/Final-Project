import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-diseases-name',
  templateUrl: './diseases-name.component.html',
  styleUrls: ['./diseases-name.component.css']
})
export class DiseasesNameComponent {
  @Input() kk:any;
}
