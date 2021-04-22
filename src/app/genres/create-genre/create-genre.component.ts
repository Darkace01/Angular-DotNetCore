import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { genreCreateDTO } from '../genres.module';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  saveChanges(genreCreateDTO: genreCreateDTO) {
    console.log(genreCreateDTO);
    this.router.navigate(['/genres']);
  }


}
