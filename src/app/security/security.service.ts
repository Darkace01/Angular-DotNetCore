import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { authenticationResponse, userCredentials } from './security.models';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) { }

  private readonly apiURL = environment.apiURL + "/accounts";
  private readonly tokenKey: string = 'token';
  private readonly expirationTokenKey: string = 'token-expiration';
  private readonly roleField = "role";

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) {
      return false;
    }

    const expiration = localStorage.getItem(this.expirationTokenKey) as string;
    const expirationDate = new Date(expiration);

    if (expirationDate <= new Date()) {
      this.logOut();
      return false;
    }

    return true;
  }

  getFieldFromJWT(field: string): string {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) { return ''; }
    const dataToken = JSON.parse(atob(token.split('.')[1]));
    return dataToken[field];
  }

  logOut() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.expirationTokenKey);
  }
  getRole(): string {
    return this.getFieldFromJWT(this.roleField);
  }

  register(userCredentials: userCredentials): Observable<authenticationResponse> {
    return this.http.post<authenticationResponse>(this.apiURL + "/create", userCredentials);
  }

  login(userCredentials: userCredentials): Observable<authenticationResponse> {
    return this.http.post<authenticationResponse>(this.apiURL + "/login", userCredentials);
  }

  saveToken(authenticationResponse: authenticationResponse) {
    localStorage.setItem(this.tokenKey, authenticationResponse.token);
    localStorage.setItem(this.expirationTokenKey, authenticationResponse.expiration.toString());
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
}
