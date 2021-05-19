import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { movieTheatersDTO } from '../movie-theater.model';
import { MovieTheaterService } from '../movie-theater.service';

@Component({
  selector: 'app-index-movie-theater',
  templateUrl: './index-movie-theater.component.html',
  styleUrls: ['./index-movie-theater.component.css']
})
export class IndexMovieTheaterComponent implements OnInit {

  constructor(private movieTheaterService: MovieTheaterService, private router: Router) { }

  movieTheaters!: movieTheatersDTO[];

  columnsToDisplay = ['name', 'actions'];

  ngOnInit(): void {
    this.loadMovieTheaters()
  }
  loadMovieTheaters() {
    this.movieTheaterService.get().subscribe(movieTheaters => this.movieTheaters = movieTheaters);
  }

  delete(id: number) {
    this.movieTheaterService.delete(id).subscribe(() => {
      this.loadMovieTheaters();
    });
  }
}
