import { Equipo } from './../../model/equipo/equipo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  private apiUrl = "http://localhost:8080/equipos";

  constructor(private http: HttpClient) { }

  getAllEquipos(): Observable<Equipo[]> {
    return this.http.get<Equipo[]>(`${this.apiUrl}`,this.httpOptions);
  }

  getEquipoById(id: number): Observable<Equipo> {
    return this.http.get<Equipo>(`${this.apiUrl}/${id}`);
  }

  saveEquipo(equipo: Equipo): Observable<Equipo> {
    return this.http.post<Equipo>(`${this.apiUrl}/guardar`, equipo);
  }

  updateEquipo(id: number, equipo: Equipo): Observable<Equipo> {
    return this.http.put<Equipo>(`${this.apiUrl}/${id}`, equipo);
  }

  deleteEquipo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
