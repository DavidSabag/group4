import { Component, Input, Output, EventEmitter } from '@angular/core';

interface imgDetails {
  img: string,
  autor: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //@Input() img: string;
  @Output() imgToDisplay = new EventEmitter<string>()
  imgd: imgDetails[];

  constructor() {
    this.imgd = [
      {
        img: "http://oddstuffmagazine.com/wp-content/uploads/2018/05/forest-in-Norway-650x908.jpg",
        autor: "Sam Tuly"
      },
      {
        img: "https://images.unsplash.com/photo-1533093706074-04d7d3749482?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
        autor: "Dan"
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbASL-StpCGef6hkHuQK4FCHoi779rX2NnaEBDRlyIUO_rxmoM",
        autor: "Avi"
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIi2ipZHkzNWq3473YZ89jltgvTzFVIwB39_sf5NfHmm27Do8",
        autor: "Sami"
      },
      {
        img: "https://images.unsplash.com/photo-1533093706074-04d7d3749482?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
        autor: "Shaul"
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbASL-StpCGef6hkHuQK4FCHoi779rX2NnaEBDRlyIUO_rxmoM",
        autor: "Jon"
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIi2ipZHkzNWq3473YZ89jltgvTzFVIwB39_sf5NfHmm27Do8",
        autor: "Snow"
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIi2ipZHkzNWq3473YZ89jltgvTzFVIwB39_sf5NfHmm27Do8",
        autor: "BamBam"
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIi2ipZHkzNWq3473YZ89jltgvTzFVIwB39_sf5NfHmm27Do8",
        autor: "Dana"
      },
      {
        img: "http://oddstuffmagazine.com/wp-content/uploads/2018/05/forest-in-Norway-650x908.jpg",
        autor: "Yam"
      },
    ]
  }
  // emmiter() {
  //   this.imgToDisplay.emit(this.imgd);
  // }
  onAddToFavorites(img: string) {
    console.log("My Image string " + img);
  }
}
