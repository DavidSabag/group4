import { Component, ViewChild, DoCheck } from '@angular/core';
import { SearchFormComponent } from './search-form/search-form.component'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  @ViewChild(SearchFormComponent) searchForm: SearchFormComponent ;
  resultss: any;
  constructor() { 
    //this.resultss = null;
  }
  // ngAfterViewInit(){
  //   console.log(this.searchForm.results);
  //   //this.resultss = this.searchForm.results;
  // }
  ngDoCheck(){
    this.resultss = JSON.stringify( this.searchForm.results);
  }
}
