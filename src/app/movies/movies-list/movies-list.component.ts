import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.movies = [
        {
          title: 'James Bond',
          releaseDate: new Date(),
          price: 145.99
        },
        {
          title: 'Vercel',
          releaseDate: new Date(),
          price: 445.99
        },
        {
          title: 'Bobo yii',
          releaseDate: new Date('2021-10-12'),
          price: 135.99
        }
      ];
    }, 0);
  }
  movies: any;
}
