import {MovieComponent} from "./movie.component";
import {SharedModule} from "../../shared/shared.module";
import {NgModule} from "@angular/core";
import {MovieStoreModule} from "./movie-route-store/movie-store.module";
import {MovieRouteModule} from "./movie-route-store/movie-route.module";
import { MovieDetailsComponent } from './movie-details/movie-details.component';


@NgModule({
    imports: [
        SharedModule,
        MovieStoreModule,
        MovieRouteModule
    ],
    declarations: [
        MovieComponent,
        MovieDetailsComponent,
    ]
})
export class MovieModule {}
