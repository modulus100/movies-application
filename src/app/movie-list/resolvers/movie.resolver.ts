import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {MovieService} from "../../movie-service/movie.service";
import {MovieSearchResponse} from "../../movie-service/models/movie-search-response.model";


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