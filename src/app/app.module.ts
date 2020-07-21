import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {TopBarComponent} from './core/top-bar/top-bar.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {URLInterceptor} from "./core/http/url.interceptor";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from "./app-routing.module";
import {MovieModule} from "./modules/movie/movie.module";
import {AppStoreModule} from "./app-store.module";


@NgModule({
    imports: [
        AppRoutingModule,
        AppStoreModule,
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NgbModule,
        MovieModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: URLInterceptor,
            multi: true
        }],
    declarations: [
        AppComponent,
        TopBarComponent
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
