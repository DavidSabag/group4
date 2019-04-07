import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
  @Input() myImg:string;
  counter: number;
  constructor() {
    this.counter = 0;
   }
  clicked(){
    this.counter++;
  }
}
