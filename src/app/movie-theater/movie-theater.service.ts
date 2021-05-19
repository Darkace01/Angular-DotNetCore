import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { movieTheatersCreationDTO, movieTheatersDTO } from './movie-theater.model';

@Injectable({
  providedIn: 'root'
})
export class MovieTheaterService {

  constructor(private http: HttpClient) {
  }
  private apiURL = environment.apiURL + '/movieTheater';

  public get(): Observable<movieTheatersDTO[]> {
    return this.http.get<movieTheatersCreationDTO[]>(this.apiURL);
  }

  public create(movieTheaterDTO: movieTheatersCreationDTO) {
    return this.http.post(this.apiURL, movieTheaterDTO);
  }
}
