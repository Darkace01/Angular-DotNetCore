import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { movieTheaterCreationDTO, movieTheatersDTO } from './movie-theater.model';

@Injectable({
  providedIn: 'root'
})
export class MovieTheaterService {

  constructor(private http: HttpClient) {
  }
  private apiURL = environment.apiURL + '/movieTheater';

  public get(): Observable<movieTheatersDTO[]> {
    return this.http.get<movieTheatersDTO[]>(this.apiURL);
  }

  public getById(id: number): Observable<movieTheatersDTO> {
    return this.http.get<movieTheatersDTO>(`${this.apiURL}/${id}`);
  }

  public create(movieTheaterDTO: movieTheaterCreationDTO) {
    return this.http.post(this.apiURL, movieTheaterDTO);
  }

  public edit(id: number, movieTheaterDTO: movieTheaterCreationDTO) {
    return this.http.put(`${this.apiURL}/${id}`, movieTheaterDTO);
  }

  public delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
