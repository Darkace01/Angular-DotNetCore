import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { genreCreateDTO } from '../genres.module';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router: Router, private genreService: GenresService) { }


  ngOnInit(): void {
  }

  saveChanges(genreCreateDTO: genreCreateDTO) {
    this.genreService.create(genreCreateDTO).subscribe(() => {
      this.router.navigate(['/genres']);
    }, error => console.error(error));

  }


}
