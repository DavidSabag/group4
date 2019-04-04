import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgArr: string[];
  constructor(){
      this.imgArr = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg",
      "images/pic4.jpg", "images/pic5.jpg", "images/pic6.jpg", "images/pic7.jpg",
      "images/pic8.jpg", "images/pic9.jpg", "images/pic10.jpg"];
  }
}
