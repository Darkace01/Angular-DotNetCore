import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { genreCreateDTO, genreDTO } from '../genres.module';
import { GenresService } from '../genres.service';
@Component({
  selector: 'app-edit-genre',
  templateUrl: './edit-genre.component.html',
  styleUrls: ['./edit-genre.component.css']
})
export class EditGenreComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private genreService: GenresService) { }

  model!: genreDTO;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.genreService.getById(params.id).subscribe(genre => {
        this.model = genre;
      })
    });
  }
  saveChanges(genreCreateDTO: genreCreateDTO) {
    this.genreService.edit(this.model.id, genreCreateDTO)
      .subscribe(() => {
        this.router.navigate(['/genres']);
      });
  }
}
