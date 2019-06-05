import { Component } from '@angular/core';
import { MovieSearchService } from '../movie-search.service'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent  {
  results: any;
  constructor(private movieSearchService : MovieSearchService) { 
    //this.results = 'fghf'
  }

   async search(term){
    this.results = await this.movieSearchService.getMoviesSer("http://www.omdbapi.com/?apikey=d777cf78",term,"1");
    //console.log(this.results);
    
  }

}
