import {Movie} from "../../models/movie.model";
import {EntityState, EntityAdapter, createEntityAdapter} from "@ngrx/entity"
import * as rootState from "../../../../state/app-state"
import {defaultMovie, MovieState} from "./movieStateConfig";
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

export function movieReducer(state= initialState, action) {
    switch (action.type) {
        case MovieActionTypes.LOAD_MOVIES: {
            return {
                ...state,
                loading: true,
                loaded: false
            };
        }

        default: {
            return state;
        }
    }
}
