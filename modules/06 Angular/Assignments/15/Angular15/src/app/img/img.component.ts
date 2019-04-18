import { Component, Input, EventEmitter, Output } from '@angular/core';
interface imgDetails {
  img: string,
  autor: string
}
@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
  @Input() myImg: imgDetails;

  @Output()  imgToDisplay = new EventEmitter<imgDetails>()
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
  check(){
    
  }
}
