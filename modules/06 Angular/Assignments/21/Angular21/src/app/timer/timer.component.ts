import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  timer: string;
  interval:any;
  constructor() {
      this.timer = "00:00";
   }

  ngOnInit() {
    let sec = Number(this.timer.split(':')[1]);
    let minuts = Number(this.timer.split(':')[0]);
    this.interval = setInterval( () =>{
      sec++
      this.timer =  minuts + ':' + sec
    },1000)
  }

}
