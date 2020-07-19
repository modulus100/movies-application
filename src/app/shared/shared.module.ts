import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        FormsModule,
        MatListModule,
        MatIconModule,
        ScrollingModule,
        MatButtonModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        CommonModule
    ]
})
export class SharedModule { }