import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { genreCreateDTO } from '../genres.module';
@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  model: genreCreateDTO = { name: 'Drama' };
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
    });
  }
  saveChanges(genreCreateDTO: genreCreateDTO) {
    console.log(genreCreateDTO);
    this.router.navigate(['/genres']);
  }
}
