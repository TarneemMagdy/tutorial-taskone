import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MoviesDetailsComponent } from './movies-details/movies-details.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { TvDetailsComponent } from './tv-details/tv-details.component';
// import { TvListComponent } from './tv-list/tv-list.component';

const routes: Routes = [
  {path:'movies',component:MovieslistComponent},
  // {path:'tvs',component:TvListComponent},
  // {path:'tvs/:id',component:MoviesDetailsComponent},
  // {path:'movies/:id',component:MoviesDetailsComponent},
// {path:'**',component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
