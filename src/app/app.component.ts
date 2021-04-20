import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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



  title = 'angular-movies';
  movies: any;
  duplicateNumber(n: number) {
    return n * 2
  }
}
