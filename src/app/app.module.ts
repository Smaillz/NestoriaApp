import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {BuildInfoComponent} from "./buildInfo/buildinfo.component";
import {PaginationComponent} from "./pagination/pagination.component";
import {CommonModule} from "@angular/common";
import {NavBarComponent} from "./navbar/navbar.component";

@NgModule({
  declarations: [
    AppComponent,
    BuildInfoComponent,
    PaginationComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
