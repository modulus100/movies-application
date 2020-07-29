import { Component, OnInit } from '@angular/core';
import { select, Store } from "@ngrx/store";
import { Movie } from "../models/movie.model";
import { ActivatedRoute, Router } from "@angular/router";
import * as appStates from "../movie-route-store/state/movie-state";
import * as movieSelectors from "../movie-route-store/state/movie.selector"
import { Observable, of } from "rxjs";


@Component({
    selector: 'app-movie-details',
    templateUrl: './movie-details.component.html',
    styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit {
    public movie$: Observable<Movie>;

    constructor(private store$: Store<appStates.AppState>,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(params => {
            const id = params.get('id');
            this.movie$ = this.store$.select(movieSelectors.getMovieById, {id});
        });
    }

    goMainPage(event=null): void {
        this.router.navigate(['']).catch(() => {
            console.log("Couldn't navigate to root");
        })
    }
}
