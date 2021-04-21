import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActorsComponent } from './actors/create-actors/create-actors.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';
import { CreateMovieTheaterComponent } from './movie-theater/create-movie-theater/create-movie-theater.component';
import { IndexMovieTheaterComponent } from './movie-theater/index-movie-theater/index-movie-theater.component';
import { CreateMoviesComponent } from './movies/create-movies/create-movies.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'genres', component: IndexGenresComponent },
  { path: 'genres/create', component: CreateGenreComponent },

  { path: 'actors', component: IndexActorsComponent },
  { path: 'actors/create', component: CreateActorsComponent },

  { path: 'movietheaters', component: IndexMovieTheaterComponent },
  { path: 'movietheaters/create', component: CreateMovieTheaterComponent },

  { path: 'movies/create', component: CreateMoviesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
