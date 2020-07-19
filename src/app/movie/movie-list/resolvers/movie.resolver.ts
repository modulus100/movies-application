import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {MovieService} from "../../movie.service";
import {MovieSearchResponse} from "../../models/movie-search-response.model";

// Just loads init data to show when the app gets opened for the first time
@Injectable({
    providedIn: 'root'
})
export class MovieListResolver implements Resolve<any> {
    constructor(private movieService: MovieService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MovieSearchResponse> {
        const keyWord = "People";
        return this.movieService.searchMoviesContentByKeyword(keyWord);
    }
}