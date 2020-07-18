import {Component, OnInit} from '@angular/core';
import {MovieService} from "../movie-service/movie.service";
import {MovieSearchResponse} from "../movie-service/models/movie-search-response.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit{

  constructor(private movieService: MovieService) {
  }

  share() {
    window.alert('The product has been shared!');
  }

  ngOnInit(): void {
    const keyWord = "People";
    this.movieService.searchMoviesContentByKeyword(keyWord)
        .subscribe((response: MovieSearchResponse) => {
          console.log(response);
        }, error => {
          console.log(error);
        }, () => {
          console.log("transfers completed");
        });

  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/