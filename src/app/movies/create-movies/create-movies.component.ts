import { Component, OnInit } from '@angular/core';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { movieCreationDTO } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-create-movies',
  templateUrl: './create-movies.component.html',
  styleUrls: ['./create-movies.component.css']
})
export class CreateMoviesComponent implements OnInit {

  constructor(private movieService: MoviesService) { }

  nonSelectedGenres!: multipleSelectorModel[];
  nonSelectedMovieTheaters!: multipleSelectorModel[];

  ngOnInit(): void {
    this.movieService.postGet().subscribe(response => {
      this.nonSelectedGenres = response.genres.map(genre => {
        return <multipleSelectorModel>{ key: genre.id, value: genre.name }
      });

      this.nonSelectedMovieTheaters = response.movieTheaters.map(movieTheater => {
        return <multipleSelectorModel>{ key: movieTheater.id, value: movieTheater.name }
      });
    });
  }

  saveChanges(movieCreationDTO: movieCreationDTO) {
    console.log(movieCreationDTO);
  }
}
