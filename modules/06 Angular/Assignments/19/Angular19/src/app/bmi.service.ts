import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BMIService {

  constructor() { }

  public calcBMI(weight:string, height : string ) {
    //let w = Number(weight);
    return Number(weight) / (Number(height) * Number(height)); 
  }
}
