import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Movie} from "../models/movie.model";
import {MovieActionTypes} from "../movie-route-store/state/movieActionTypes";
import * as movieActions from "../movie-route-store/state/movie.actions";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
    public movies: Array<Movie>;

    constructor(private store: Store<any>,
                private router: ActivatedRoute) {
    }

    ngOnInit(): void {
        console.log(this.router.params);
    }
}
