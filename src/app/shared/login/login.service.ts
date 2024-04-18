import { Jugador } from './../../model/juagador/jugador';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  private apiUrl = "http://localhost:8080/login";
  constructor(private http: HttpClient) { }

  login(jugador:Jugador):Observable<Jugador>{
    return this.http.post<Jugador>(this.apiUrl,jugador);
  }
}
