import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MovieComponent} from "./app-modules/movie/movie.component";
import {MovieListResolver} from "./app-modules/movie/resolvers/movie.resolver";


const appRoutes: Routes = [
    {
        path: '',
        component: MovieComponent,
        resolve: {
            movies: MovieListResolver
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
