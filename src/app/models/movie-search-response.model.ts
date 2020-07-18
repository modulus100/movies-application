import "./movie.model";
import {Movie} from "./movie.model";

export interface MovieSearchResponse {
    Search: Array<Movie>;
    totalResults: Number;
    Response: Boolean;
}