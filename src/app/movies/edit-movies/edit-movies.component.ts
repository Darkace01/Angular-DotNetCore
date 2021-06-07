import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { movieCreationDTO, movieDTO } from '../movies.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-edit-movies',
  templateUrl: './edit-movies.component.html',
  styleUrls: ['./edit-movies.component.css']
})
export class EditMoviesComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private moviesService: MoviesService) { }

  // model: movieDTO = {
  //   title: 'Eternals', inTheaters: true, summary: 'Dude really',
  //   releaseDate: new Date(), trailer: 'ABBUU', poster: 'https://m.media-amazon.com/images/M/MV5BOTYzMTlhM2ItMmFkYi00ZTJhLTg3MWQtNzM1NTRkM2NiNzRjXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_UY268_CR8,0,182,268_AL_.jpg'
  // }
  model!: movieDTO;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
    });
  }

  // saveChanges(movieCreationDTO: movieCreationDTO) {

  // }

  saveChanges(movieCreationDTO: any) {

  }
}
