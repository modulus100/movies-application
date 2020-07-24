import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MovieComponent} from "./modules/movie/movie.component";
import {MovieDetailsComponent} from "./modules/movie/movie-details/movie-details.component";


const appRoutes: Routes = [
    {
        path: '',
        component: MovieComponent,
        resolve: {
            //movies: MovieListResolver
        }
    },
    {
        path: "movie-details/:id",
        component: MovieDetailsComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
