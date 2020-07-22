import {createFeatureSelector, createSelector} from "@ngrx/store";
import {MovieState} from "./movie-state";
import {movieAdapter} from "./movie.reducer";


const getMovieFeatureState = createFeatureSelector<MovieState>(
    'movies'
)

export const getMovies = createSelector(
    getMovieFeatureState,
    movieAdapter.getSelectors().selectAll
);

export const getMoviesLoading = createSelector(
    getMovieFeatureState,
    (state: MovieState) => state.loading
);

export const getMoviesLoaded = createSelector(
    getMovieFeatureState,
    (state: MovieState) => state.loaded
);

export const getError = createSelector(
    getMovieFeatureState,
    (state: MovieState) => state.error
);
