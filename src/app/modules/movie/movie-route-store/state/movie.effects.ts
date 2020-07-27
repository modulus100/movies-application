import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { MovieService } from "../../services/movie.service";
import { catchError, map, mergeMap } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { Action, Store } from "@ngrx/store";
import * as movieActions from "./movie.actions"
import { MovieActionTypes } from "./movieActionTypes";
import { MovieSearchResponse } from "../../models/movie-search-response.model";
import { Movie } from "../../models/movie.model";
import { LoadMovies } from "./movie.actions";
import * as appStates from "./movie-state";

@Injectable()
export class MovieEffects {

    constructor(private actions: Actions,
                private movieService: MovieService,
                private store: Store<appStates.AppState>) {
    }

    initIds(movies: Array<Movie>): void {
        for (let i = 0; i < movies.length; i++) {
            movies[i].id = i;
        }
    }

    @Effect()
    loadMovies: Observable<Action> = this.actions.pipe(
        ofType<movieActions.LoadMovies>(MovieActionTypes.LOAD_MOVIES),
        mergeMap((action: LoadMovies) => this.movieService.searchMoviesContentByKeyword(action.searchKeyword)
            .pipe(
                catchError(err => {
                    this.store.dispatch(new movieActions.LoadMoviesFail(err))
                    return of([])
                })
            )
        ),
        map((response: MovieSearchResponse) => {
                if (!response.Search) {
                    return new movieActions.LoadMoviesSuccess([]);
                }

                this.initIds(response.Search);
                return new movieActions.LoadMoviesSuccess(response.Search);
            }
        )
    );
}
