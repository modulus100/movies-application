import {Component, OnInit} from '@angular/core';
import {Movie} from "./models/movie.model";
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import * as appStates from "./movie-route-store/state/movie-state";
import * as movieSelectors from "./movie-route-store/state/movie.selector";
import * as movieActions from "./movie-route-store/state/movie.actions"
import {AppState} from "./movie-route-store/state/movie-state";


@Component({
    selector: 'movie-list',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.sass']
})
export class MovieComponent implements OnInit {
    public loading: boolean = true;
    public searchText: String;
    public noMoviesText: String = "There're no movies for this request, try something else";
    public getMoviesError$: Observable<string>;
    public movies$: Observable<Array<Movie>>;

    constructor(private store$: Store<appStates.AppState>) {}

    ngOnInit(): void {
        this.loadMovies();
        this.store$.subscribe((next: AppState) => {
            this.loading = next.movies.loading;
        });
        this.getMoviesError$ = this.store$.pipe(select(movieSelectors.getError));
        this.movies$ = this.store$.select(movieSelectors.getMovies)
    }

    search(event): void {
        this.store$.dispatch(new movieActions.LoadMovies(this.searchText));
    }

    loadMovies(): void {
        this.store$
            .select(movieSelectors.getMoviesLoaded)
            .subscribe(loaded => {
                if (!loaded) {
                    this.searchText = "People";
                    this.store$.dispatch(new movieActions.LoadMovies(this.searchText));
                }
            });
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
