import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Movie} from "../models/movie.model";
import {MovieActionTypes} from "../movie-route-store/state/movieActionTypes";
import * as movieActions from "../movie-route-store/state/movie.actions";


@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
    public movies: Array<Movie>;

    constructor(private store: Store<any>) {
    }

    ngOnInit(): void {
        //this.store.dispatch(new movieActions.LoadMovies("test"));
        //this.store.subscribe(state => (this.movies = state.movies.movies));

        //console.log(this.movies);
    }
}
