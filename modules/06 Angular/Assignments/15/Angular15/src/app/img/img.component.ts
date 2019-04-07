import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
  @Input() myImg:string;
  @Output()  imgToDisplay = new EventEmitter<string>()
  counter: number;
  constructor() {
    this.counter = 0;
   }
  clicked(){
    this.counter++;
  }
  emmiter(){
    this.imgToDisplay.emit(this.myImg);
  }
}
