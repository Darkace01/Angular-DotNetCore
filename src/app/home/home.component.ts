import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.moviesInTheater = [
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
      }
    ];

    this.moviesTrending = [
      {
        title: 'Law and Order',
        releaseDate: new Date(),
        price: 145.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BZmI3OWY5OWYtNjkyOC00MTZkLTliYTMtMmU0NTU5MGQ1MDMwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
      },
      {
        title: 'Bad Boys For Life',
        releaseDate: new Date('2021-10-12'),
        price: 135.99,
        poster: 'https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg'
      }
    ];
  }

  moviesInTheater: any;
  moviesTrending: any;
  moviesFutureReleases: any;

}
