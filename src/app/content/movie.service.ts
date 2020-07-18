import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient) { }

  searchMoviesContentByKeyword(keyword: String) {

  }
}
