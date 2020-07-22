import * as movieActions from "./movie.actions";
import {MovieActionTypes} from "./movieActionTypes";
import {defaultMovie} from "./movie-state";
import {createEntityAdapter, EntityAdapter} from "@ngrx/entity";
import {Movie} from "../../models/movie.model";


export const movieAdapter: EntityAdapter<Movie> = createEntityAdapter<Movie>();
export const initialState = movieAdapter.getInitialState(defaultMovie);

export function movieReducer(
    state= initialState,
    action: movieActions.Action) {
    switch (action.type) {
        case MovieActionTypes.LOAD_MOVIES: {
            return {
                ...state,
                loading: true
            }
        }
        case MovieActionTypes.LOAD_MOVIES_SUCCESS: {
            return movieAdapter.setAll(action.payload, {
                ...state,
                loading: false,
                loaded: true
            })
        }

        case MovieActionTypes.LOAD_MOVIES_FAIL: {
            return {
                ...state,
                entities: {},
                loading: false,
                loaded: false,
                error: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
