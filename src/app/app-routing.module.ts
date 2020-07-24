import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MovieComponent} from "./modules/movie/movie.component";
import {MovieListResolver} from "./modules/movie/resolvers/movie.resolver";


const appRoutes: Routes = [
    {
        path: '',
        component: MovieComponent,
        resolve: {
            //movies: MovieListResolver
        }
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
