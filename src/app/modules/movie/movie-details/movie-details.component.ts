import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Movie} from "../models/movie.model";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  public movies: Array<Movie>;

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.store.subscribe(state => (this.movies = state.movies.movies));
        console.log('movies 2');
        console.log(this.movies);
  }
}
