import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;

  genres = [{ id: 1, name: 'Drama' }, { id: 2, name: 'Action' }];

  movies = [
    {
      title: 'James Bond',
      releaseDate: new Date(),
      price: 145.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BMTk3ZGM2YzQtMmYxYy00NDZjLWFmOTUtZTQwMzg0ZjA5ZjU3XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      title: 'Venom',
      releaseDate: new Date('2021-10-12'),
      price: 135.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BNzAwNzUzNjY4MV5BMl5BanBnXkFtZTgwMTQ5MzM0NjM@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      title: 'Inception',
      releaseDate: new Date('2021-10-12'),
      price: 135.99,
      poster: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg'
    }
  ]

  originalMovies = this.movies;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
    });

    this.form.valueChanges
      .subscribe(values => {
        this.movies = this.originalMovies;
        this.filterMovies(values);
      })
  }

  filterMovies(values: any) {
    if (values.title) {
      this.movies = this.movies.filter(movie => movie.title.toLowerCase().indexOf(values.title.toLowerCase()) !== -1);
    }
  }

  clearForm() {
    this.form.reset();
  }
}
