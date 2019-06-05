import { Component, Input } from '@angular/core';
import { MovieSearchService } from '../movie-search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {
  //results: any;
  @Input() moviesResults: any
  constructor(private movieSearchService: MovieSearchService) { }

  // getMovies(){

  //     this.results = this.movieSearchService.results;
  // }

}
