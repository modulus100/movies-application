import {StoreModule} from '@ngrx/store';
import {MovieComponent} from "./movie.component";
import {SharedModule} from "../../shared/shared.module";
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
        MovieComponent,
    ]
})
export class MovieModule {}
