import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Movie} from "../models/movie.model";
import {ActivatedRoute} from "@angular/router";
import * as appStates from "../movie-route-store/state/movie-state";
import * as movieSelectors from "../movie-route-store/state/movie.selector"
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
    public movie$: Observable<Movie>;
    public movie: Movie;

    constructor(private store$: Store<appStates.AppState>,
                private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.initMovie();
    }

    initMovie(): void {
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            this.movie$ = this.store$.pipe(select(movieSelectors.getMovieById, {id}))
        });

        this.movie$.subscribe(next => {
            console.log(next);
        });
    }
}
