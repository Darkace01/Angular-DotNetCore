import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.moviesInTheater = [
      {
        title: 'James Bond',
        releaseDate: new Date(),
        price: 145.99
      },
      {
        title: 'Bobo yii',
        releaseDate: new Date('2021-10-12'),
        price: 135.99
      }
    ];

    this.moviesTrending = [
      {
        title: 'Awon Boys',
        releaseDate: new Date(),
        price: 145.99
      },
      {
        title: 'Talo yii',
        releaseDate: new Date('2021-10-12'),
        price: 135.99
      }
    ];
  }

  moviesInTheater: any;
  moviesTrending: any;
  moviesFutureReleases: any;
  title = 'Jiggy';
  display = true;

  duplicateNumber(n: number) {
    return n * 2
  }

  handleRating(rate: number) {
    alert(`The user selected ${rate}`)
  }
}
