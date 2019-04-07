import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-displayer',
  templateUrl: './displayer.component.html',
  styleUrls: ['./displayer.component.css']
})
export class DisplayerComponent  {
    @Input() img:string;
}

