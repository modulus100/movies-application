import {NgModule} from "@angular/core";
import {movieReducer} from "./state/movie.reducer";
import {StoreModule} from "@ngrx/store";

@NgModule({
    imports: [
        StoreModule.forFeature('movies', movieReducer)
    ],
    declarations: [
    ]
})
export class MovieStoreModule {}
