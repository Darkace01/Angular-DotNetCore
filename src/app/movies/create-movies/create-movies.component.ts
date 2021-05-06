import { Component, OnInit } from '@angular/core';
import { movieCreationDTO } from '../movies.model';

@Component({
  selector: 'app-create-movies',
  templateUrl: './create-movies.component.html',
  styleUrls: ['./create-movies.component.css']
})
export class CreateMoviesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  saveChanges(movieCreationDTO: movieCreationDTO) {
    console.log(movieCreationDTO);
  }
}
