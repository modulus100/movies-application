import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Data} from "@angular/router";
import {MovieSearchResponse} from "../models/movie-search-response.model";
import {MovieService} from "../movie.service";
import {Movie} from "../models/movie.model";

@Component({
    selector: 'movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
    public isLoading: boolean = false;
    public searchText: String = "People";
    public movies: Array<Movie>;
    public noMoviesText: String = "There're no movies for this request, try something else";

    constructor(private route: ActivatedRoute,
                private movieService: MovieService) {
    }

    ngOnInit(): void {
        this.route.data.subscribe((response: Data) => {
            this.movies = response.movies.Search;
        });
    }

    search(event): void {
        this.isLoading = !this.isLoading;
        this.movieService.searchMoviesContentByKeyword(this.searchText)
            .subscribe(
                (result: MovieSearchResponse) => {
                    if (result.Search) {
                        this.movies = result.Search
                    } else {
                        this.movies = [];
                    }
                },
                error => {
                    console.log(error)
                },
                () => {
                    this.isLoading = false;
                })
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/