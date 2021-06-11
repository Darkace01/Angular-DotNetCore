import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { genreDTO } from 'src/app/genres/genres.module';
import { GenresService } from 'src/app/genres/genres.service';
import { movieDTO } from '../movies.model';
import { MoviesService } from '../movies.service';
import { Location } from "@angular/common";
import { ActivatedRoute, Params } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private moviesService: MoviesService, private genreService: GenresService, private location: Location,
    private activatedRoute: ActivatedRoute) { }

  form!: FormGroup;

  genres!: genreDTO[];

  movies!: movieDTO[];

  originalMovies = this.movies;
  currentPage = 1;
  recordsPerPage = 10;
  initialFormValues: any;
  totalAmountOfRecords: any;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false
    });

    this.initialFormValues = this.form.value;
    this.readParameterFromURL();

    this.genreService.getAll().subscribe(genres => {
      this.genres = genres;

      this.filterMovies(this.form.value);
      this.form.valueChanges
        .subscribe(values => {
          this.filterMovies(values);
          this.writeParametersInURL();
        });
    });


  }

  filterMovies(values: any) {
    values.page = this.currentPage;
    values.recordsPerPage = this.recordsPerPage;
    this.moviesService.filter(values).subscribe((response: HttpResponse<movieDTO[]>) => {
      this.movies = response.body as movieDTO[];
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
    });
  }

  private readParameterFromURL() {
    this.activatedRoute.queryParamMap.subscribe((params: Params) => {
      var obj: any = {};
      if (params.params.title) {
        obj.title = params.params.title;
      }

      if (params.params.genreId) {
        obj.genreId = Number(params.params.genreId);
      }

      if (params.params.upcomingReleases) {
        obj.upcomingReleases = params.params.upcomingReleases;
      }

      if (params.params.inTheaters) {
        obj.inTheaters = params.params.inTheaters;
      }

      if (params.params.page) {
        this.currentPage = params.params.page;
      }

      if (params.params.recordsPerPage) {
        this.recordsPerPage = params.params.recordsPerPage;
      }
      this.form.patchValue(obj);
    });
  }

  private writeParametersInURL() {
    const queryStrings = [];
    const formValues = this.form.value;

    if (formValues.title) {
      queryStrings.push(`title=${formValues.title}`);
    }

    if (formValues.genreId != 0) {
      queryStrings.push(`genreId=${formValues.genreId}`);
    }

    if (formValues.upcomingReleases) {
      queryStrings.push(`upcomingReleases=${formValues.upcomingReleases}`);
    }

    if (formValues.inTheaters) {
      queryStrings.push(`inTheaters=${formValues.inTheaters}`);
    }

    queryStrings.push(`page=${this.currentPage}`);
    queryStrings.push(`recordsPerPage=${this.recordsPerPage}`);

    this.location.replaceState('movies/filter', queryStrings.join('&'));
  }

  clearForm() {
    this.form.patchValue(this.initialFormValues);
  }

  paginatorUpdate(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.recordsPerPage = event.pageSize;
    this.writeParametersInURL();
    this.filterMovies(this.form.value);
  }
}
