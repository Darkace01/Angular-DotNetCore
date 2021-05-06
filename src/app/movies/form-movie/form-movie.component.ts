import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { multipleSelectorModel } from 'src/app/utilities/multiple-selector/multiple-selector.model';
import { movieCreationDTO, movieDTO } from '../movies.model';

@Component({
  selector: 'app-form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css']
})
export class FormMovieComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form!: FormGroup;

  @Input()
  model!: movieDTO;

  @Output()
  onSaveChanges = new EventEmitter<movieCreationDTO>();

  nonSelectedGenres: multipleSelectorModel[] = [
    { key: 1, value: 'Drama' },
    { key: 2, value: 'Action' },
    { key: 3, value: 'Comedy' },
  ];

  selectedGenres: multipleSelectorModel[] = [];

  nonSelectedMovieTheaters: multipleSelectorModel[] = [
    { key: 1, value: 'AMC' },
    { key: 2, value: 'Amazon Studios' },
    { key: 3, value: 'Jiggy' },
  ]

  selectedMovieTheaters: multipleSelectorModel[] = [];

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', {
        validators: [Validators.required]
      }],
      summary: '',
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
      genresIds: '',
      movieTheatersIds: '',
    });

    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  changeMarkdown(content: string) {
    this.form.get('summary')?.setValue(content);
  }

  onImageSelected(file: File) {
    this.form.get('poster')?.setValue(file);
  }

  saveChanges() {
    const genresIds = this.selectedGenres.map(value => value.key);
    this.form.get('genresIds')?.setValue(genresIds);

    const movieTheatersIds = this.selectedMovieTheaters.map(value => value.key);
    this.form.get('movieTheatersIds')?.setValue(movieTheatersIds);

    this.onSaveChanges.emit(this.form.value);
  }
}
