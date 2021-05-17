import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { movieTheatersCreationDTO } from './movie-theater.model';

@Injectable({
  providedIn: 'root'
})
export class MovieTheaterService {

  constructor(private http: HttpClient) {
  }
  private apiURL = environment.apiURL + '/movieTheater';

  public create(movieTheaterDTO: movieTheatersCreationDTO) {
    return this.http.post(this.apiURL, movieTheaterDTO);
  }
}
