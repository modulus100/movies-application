import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {MovieListComponent} from './movie-list/movie-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {URLInterceptor} from "./http/url.interceptor";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: '', component: MovieListComponent},
        ])
    ],
    providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: URLInterceptor,
          multi: true
        }],
    declarations: [
        AppComponent,
        TopBarComponent,
        MovieListComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/