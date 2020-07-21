import {MovieComponent} from "./movie.component";
import {SharedModule} from "../../shared/shared.module";
import {NgModule} from "@angular/core";
import {MovieStoreModule} from "./movie-store.module";


@NgModule({
    imports: [
        SharedModule,
        MovieStoreModule
    ],
    declarations: [
        MovieComponent,
    ]
})
export class MovieModule {}
