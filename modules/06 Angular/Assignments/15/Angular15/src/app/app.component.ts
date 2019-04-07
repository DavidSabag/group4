import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imgArr: string[];
  constructor(){
      this.imgArr = ["http://oddstuffmagazine.com/wp-content/uploads/2018/05/forest-in-Norway-650x908.jpg", "https://images.unsplash.com/photo-1533093706074-04d7d3749482?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbASL-StpCGef6hkHuQK4FCHoi779rX2NnaEBDRlyIUO_rxmoM",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIi2ipZHkzNWq3473YZ89jltgvTzFVIwB39_sf5NfHmm27Do8", "https://images.unsplash.com/photo-1533093706074-04d7d3749482?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbASL-StpCGef6hkHuQK4FCHoi779rX2NnaEBDRlyIUO_rxmoM", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIi2ipZHkzNWq3473YZ89jltgvTzFVIwB39_sf5NfHmm27Do8",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIi2ipZHkzNWq3473YZ89jltgvTzFVIwB39_sf5NfHmm27Do8", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIIi2ipZHkzNWq3473YZ89jltgvTzFVIwB39_sf5NfHmm27Do8", "http://oddstuffmagazine.com/wp-content/uploads/2018/05/forest-in-Norway-650x908.jpg"];
  }
}
