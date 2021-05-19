import { Component, OnInit } from '@angular/core';
import { movieTheatersDTO } from '../movie-theater.model';
import { MovieTheaterService } from '../movie-theater.service';

@Component({
  selector: 'app-index-movie-theater',
  templateUrl: './index-movie-theater.component.html',
  styleUrls: ['./index-movie-theater.component.css']
})
export class IndexMovieTheaterComponent implements OnInit {

  constructor(private movieTheaterService: MovieTheaterService) { }

  movieTheaters!: movieTheatersDTO[];

  columnsToDisplay = ['name', 'actions'];

  ngOnInit(): void {
    this.movieTheaterService.get().subscribe(movieTheaters => this.movieTheaters = movieTheaters);
  }

  delete(id: number) {

  }
}
