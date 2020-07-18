import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieSearchResponse} from "../movie-service/models/movie-search-response.model";
import {MovieService} from "../movie-service/movie.service";
import {Movie} from "../movie-service/models/movie.model";

@Component({
    selector: 'movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
    public isLoading: boolean = false;
    public searchText: String = "";
    public movies: Array<Movie>;

    constructor(private route: ActivatedRoute,
                private movieService: MovieService) {
    }

    ngOnInit(): void {
        this.route.data.subscribe((response: MovieSearchResponse) => {
            this.movies = response.Search;
        });
    }

    search(event): void {
        this.isLoading = !this.isLoading;
        this.movieService.searchMoviesContentByKeyword(this.searchText)
            .subscribe(
                (result: MovieSearchResponse) => {
                    this.movies = result.Search;
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