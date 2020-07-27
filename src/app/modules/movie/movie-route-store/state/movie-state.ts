import { Movie } from "../../models/movie.model";
import { EntityState } from "@ngrx/entity";
import * as rootState from "../../../../state/app-state";


export interface MovieState extends EntityState<Movie> {
    selectedMovieId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
}

export const defaultMovie: MovieState = {
    ids: [],
    entities: {},
    selectedMovieId: null,
    loading: false,
    loaded: false,
    error: ''
};


export interface AppState extends rootState.AppState {
    movies: MovieState;
}

