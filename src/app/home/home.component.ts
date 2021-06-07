import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.movieService.getHomePageMovies().subscribe(homeDTO => {
      this.moviesFutureReleases = homeDTO.upcomingReleases;
      this.moviesInTheater = homeDTO.inTheaters
    })
  }

  moviesInTheater: any;
  moviesFutureReleases: any;

}
