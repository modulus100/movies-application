import {MovieActionTypes} from "./movieActionTypes";
import {Action} from "@ngrx/store";

export class LoadMovies implements Action {
    readonly type = MovieActionTypes.LOAD_MOVIES;
}
