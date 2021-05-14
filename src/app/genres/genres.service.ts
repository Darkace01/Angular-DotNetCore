import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { genreCreateDTO, genreDTO } from './genres.module';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + '/genres';

  getAll(): Observable<genreDTO[]> {
    return this.http.get<genreDTO[]>(this.apiURL);
  }

  getById(id: number): Observable<genreDTO> {
    return this.http.get<genreDTO>(`${this.apiURL}/${id}`);
  }

  create(genre: genreCreateDTO) {
    return this.http.post(this.apiURL, genre);
  }

  edit(id: number, genre: genreCreateDTO) {
    return this.http.put(`${this.apiURL}/${id}`, genre);
  }

  delete(id: number) {
    return this.http.delete<genreDTO>(`${this.apiURL}/${id}`);
  }
}
