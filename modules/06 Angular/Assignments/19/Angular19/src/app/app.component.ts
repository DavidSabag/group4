import { Component , OnInit } from '@angular/core';
import { BMIService } from './bmi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{ //implements OnInit{
  result: number;
  constructor(private bmiS: BMIService){
    this.result = 0;
  }

  mycalcBMI(e: Event, height:string, weight:string){
    e.preventDefault();
    this.result =  this.bmiS.calcBMI(height , weight);
  }
}


