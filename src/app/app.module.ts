import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { MovieratingComponent } from './movierating/movierating.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
// import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { TvListComponent } from './tv-list/tv-list.component';
// import { TvDetailsComponent } from './tv-details/tv-details.component';
@NgModule({
  declarations: [
    AppComponent,
   MovieslistComponent,
  ],
  //   WelcomeComponent,

  //   MovieratingComponent,
  //   MoviesDetailsComponent,
  //   PageNotFoundComponent,
  //   TvListComponent,
  //   TvDetailsComponent
  // ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
