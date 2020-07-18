import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {MovieSearchResponse} from "../models/movie-search-response.model"

@Injectable({
    providedIn: 'root',
})
export class MovieService {
    private root: String = "/?apikey=f79aeba3&s";

    constructor(private httpClient: HttpClient) {}

    searchMoviesContentByKeyword(keyword: String): Observable<MovieSearchResponse> {
        return this.httpClient.get<MovieSearchResponse>(`${this.root}=${keyword}`);
    }
}