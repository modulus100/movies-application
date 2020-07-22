import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MovieDetailsComponent} from "../movie-details/movie-details.component";

const movieRoutes: Routes = [
    {
        path: 'movie',
        component: MovieDetailsComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(movieRoutes),
    ],
    declarations: [
    ]
})
export class MovieRouteModule {}
