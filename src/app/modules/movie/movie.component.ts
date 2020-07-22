import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";
import {MovieSearchResponse} from "./models/movie-search-response.model";
import {MovieService} from "./services/movie.service";
import {Movie} from "./models/movie.model";
import {Store} from "@ngrx/store";
import {MovieActionTypes} from "./movie-route-store/state/movieActionTypes";

@Component({
    selector: 'movie-list',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
    public isLoading: boolean = false;
    public searchText: String = "People";
    public movies: Array<Movie>;
    public noMoviesText: String = "There're no movies for this request, try something else";

    constructor(private route: ActivatedRoute,
                private movieService: MovieService,
                private store: Store<any>) {
    }

    ngOnInit(): void {
        this.store.dispatch({type: MovieActionTypes.LOAD_MOVIES});
        /*this.store.subscribe(state => (this.movies2 = state.movies.movies));
        console.log('movies 2');
        console.log(this.movies2);*/

        this.route.data.subscribe((response: Data) => {
            this.movies = response.movies.Search;
        });
    }

    search(event): void {
        this.isLoading = !this.isLoading;
        this.movieService.searchMoviesContentByKeyword(this.searchText)
            .subscribe(
                (result: MovieSearchResponse) => {
                    if (result.Search) {
                        this.movies = result.Search
                    } else {
                        this.movies = [];
                    }
                },
                error => {
                    console.log(error)
                },
                () => {
                    this.isLoading = false;
                })
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
