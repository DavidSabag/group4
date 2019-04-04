import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {
  @Input() myImg:string;
  counter: number;
  constructor() {
    this.counter = 0;
   }

  ngOnInit() {
    
  }
  clicked(){
    this.counter++;
  }
}
