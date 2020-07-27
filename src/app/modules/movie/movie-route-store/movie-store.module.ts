import { NgModule } from "@angular/core";
import { movieReducer } from "./state/movie.reducer";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { MovieEffects } from "./state/movie.effects";

@NgModule({
    imports: [
        StoreModule.forFeature('movies', movieReducer),
        EffectsModule.forFeature([MovieEffects])
    ],
    declarations: [
    ]
})
export class MovieStoreModule {}
