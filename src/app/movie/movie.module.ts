import {StoreModule} from '@ngrx/store';
import {MovieListComponent} from "./movie-list/movie-list.component";
import {SharedModule} from "../shared/shared.module";
import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";

// const productRoutes: Routes = [
//     { path: '', component: MovieDetails }
// ];

@NgModule({
    imports: [
        SharedModule,
        //RouterModule.forChild(movieRoutes),
        //StoreModule.forFeature('movies', productReducer)
    ],
    declarations: [
        MovieListComponent,
    ]
})
export class MovieModule {}