import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovieState } from "./movie-state";
import { movieAdapter } from "./movie.reducer";
import { Movie } from "../../models/movie.model";
import { Dictionary } from "@ngrx/entity";


const getMovieState = createFeatureSelector<MovieState>('movies')

export const getMovies = createSelector(
    getMovieState,
    movieAdapter.getSelectors().selectAll
);

export const getMoviesLoading = createSelector(
    getMovieState,
    (state: MovieState) => state.loading
);

export const getMoviesLoaded = createSelector(
    getMovieState,
    (state: MovieState) => state.loaded
);

export const getError = createSelector(
    getMovieState,
    (state: MovieState) => state.error
);

export const getMovieEntities = createSelector(
    getMovieState,
    movieAdapter.getSelectors().selectEntities
);

export const getMovieById = createSelector(
    getMovieEntities,
    (entities: Dictionary<Movie>, props: { id: string }) => {
        return entities[props.id];
    }
);
