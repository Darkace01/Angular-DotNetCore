import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../utilities/utils';
import { movieCreationDTO, MoviePostGetDTO } from './movies.model';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + '/movies';

  public postGet(): Observable<MoviePostGetDTO> {
    return this.http.get<MoviePostGetDTO>(`${this.apiURL}/postget`);
  }

  public create(movieCreationDTO: movieCreationDTO) {
    const formData = this.buildFormData(movieCreationDTO);
    return this.http.post(`${this.apiURL}`, formData);
  }

  private buildFormData(movie: movieCreationDTO): FormData {
    const formData = new FormData();

    formData.append('title', movie.title);
    formData.append('summary', movie.summary);
    formData.append('trailer', movie.trailer);
    formData.append('inTheaters', String(movie.inTheaters));
    if (movie.releaseDate) {
      formData.append('releaseDate', formatDateFormData(movie.releaseDate));
    }
    if (movie.poster) {
      formData.append('poster', movie.poster);
    }

    formData.append('genresIds', JSON.stringify(movie.genresIds));
    formData.append('moviesTheatersIds', JSON.stringify(movie.movieTheatersIds));
    formData.append('actors', JSON.stringify(movie.actors));

    return formData;
  }
}
