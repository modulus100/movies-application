import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MovieService} from "./services/movie.service";
import {Movie} from "./models/movie.model";
import {select, Store} from "@ngrx/store";
import {combineLatest, Observable} from "rxjs";
import * as appStates from "./movie-route-store/state/movie-state";
import * as movieSelectors from "./movie-route-store/state/movie.selector";
import * as movieActions from "./movie-route-store/state/movie.actions"
import {AppState} from "./movie-route-store/state/movie-state";
import {take} from "rxjs/operators";


@Component({
    selector: 'movie-list',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
    public loading: boolean = true;
    public searchText: String = "People";
    public noMoviesText: String = "There're no movies for this request, try something else";
    public movies$: Observable<Array<Movie>>;
    public getMoviesError$: Observable<string>;

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
