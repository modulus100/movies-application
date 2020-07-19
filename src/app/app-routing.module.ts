import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MovieListComponent} from "./movie/movie-list/movie-list.component";
import {MovieListResolver} from "./movie/movie-list/resolvers/movie.resolver";


const appRoutes: Routes = [
    {
        path: '',
        component: MovieListComponent,
        resolve: {
            movieList: MovieListResolver
        }
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }