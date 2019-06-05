import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieSearchService {
  // api:string;
  // searchTerm:string;
  // pageNumber: string;
  //results: any;
  constructor() { }

  async getMoviesSer(api,searchTerm,pageNumber){
       const stream = await fetch(`${api}&s=${searchTerm}&type=movie&page=${pageNumber}`);
       const json = await stream.json();
      return json.Search;

         
  }

}
