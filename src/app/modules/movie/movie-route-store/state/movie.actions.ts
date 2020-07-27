import { MovieActionTypes } from "./movieActionTypes";
// @ts-ignore
import { Action } from "@ngrx/store";
import { Movie } from "../../models/movie.model";

export class LoadMovies implements Action {
    constructor(public searchKeyword: String) {}

    readonly type = MovieActionTypes.LOAD_MOVIES;
}

export class LoadMoviesSuccess implements Action {
    readonly type = MovieActionTypes.LOAD_MOVIES_SUCCESS;

    constructor(public payload: Movie[]) {}
}

export class LoadMoviesFail implements Action {
    readonly type = MovieActionTypes.LOAD_MOVIES_FAIL;

    constructor(public payload: string) {
        console.log("error jopta");
    }
}

export type Action = LoadMovies | LoadMoviesSuccess | LoadMoviesFail;
