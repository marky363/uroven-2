import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CategoriesComponent } from './categories/categories.component';
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { environment } from "../environments/environment";



import * as fromApp from "./store/app.reducer";
import { GalleryComponent } from './categories/gallery/gallery.component';
import { ModalComponent } from './shared/modal/modal.component';

import { CarouselModule } from "ngx-bootstrap/carousel"




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    GalleryComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    StoreDevtoolsModule.instrument({logOnly: environment.production}),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
