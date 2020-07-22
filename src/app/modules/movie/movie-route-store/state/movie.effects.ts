import {Injectable} from "@angular/core";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {MovieService} from "../../services/movie.service";
import {catchError, map, mergeMap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {Action} from "@ngrx/store";
import * as movieActions from "./movie.actions"
import {MovieActionTypes} from "./movieActionTypes";
import {MovieSearchResponse} from "../../models/movie-search-response.model";
import {Movie} from "../../models/movie.model";

@Injectable()
export class MovieEffects {

    constructor(private actions$: Actions,
                private movieService: MovieService) {
    }

    initIds(movies: Array<Movie>): void {
        for (let i = 0; i < movies.length; i++) {
            movies[i].id = i;
        }
    }

    @Effect()
    loadCustomers$: Observable<Action> = this.actions$.pipe(
        ofType<movieActions.LoadMovies>(
            MovieActionTypes.LOAD_MOVIES
        ),
        mergeMap((action: movieActions.LoadMovies) =>
            this.movieService.searchMoviesContentByKeyword("People").pipe(
                map(
                    (respomse: MovieSearchResponse) => {
                        this.initIds(respomse.Search);
                        return new movieActions.LoadMoviesSuccess(respomse.Search)
                    }
                ),
                catchError(err => of(new movieActions.LoadMoviesFail(err)))
            )
        )
    );
}
