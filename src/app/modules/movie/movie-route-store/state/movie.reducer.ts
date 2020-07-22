import * as movieActions from "./movie.actions";
import {MovieActionTypes} from "./movieActionTypes";

const initialState = {
    movies: [
        {
            id: 1,
            Title: 'Title',
            Year: '2010',
            imdbID: 'imdHer',
            Type: 'test type',
            Poster: 'poster'
        }
    ],
    loading: false,
    loaded: true
};

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
            return {
                ...state,
                loading: false,
                loaded: true,
                movies: action.payload
            }
        }

        case MovieActionTypes.LOAD_MOVIES_FAIL: {
            return {
                ...state,
                movies: [],
                loading: true,
                loaded: false,
                error: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
