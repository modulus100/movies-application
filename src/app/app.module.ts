import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {MovieListComponent} from './movie/movie-list/movie-list.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {URLInterceptor} from "./http/url.interceptor";
import {StoreModule} from "@ngrx/store";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        StoreModule.forRoot({}),
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatProgressBarModule,
        NgbModule,
        FormsModule,
        MatListModule,
        MatIconModule,
        ScrollingModule
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