import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estrella } from '../../model/estrella/estrella';

@Injectable({
  providedIn: 'root'
})
export class EstrellaService {
  private apiUrl = 'http://localhost:8080/estrellas'; // Modifica la URL según la configuración de tu backend

  constructor(private http: HttpClient) { }

  obtenerTodasEstrellas(): Observable<Estrella[]> {
    return this.http.get<Estrella[]>(this.apiUrl);
  }

  obtenerEstrellaPorId(id: number): Observable<Estrella> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Estrella>(url);
  }

  guardarEstrella(estrella: Estrella): Observable<Estrella> {
    return this.http.post<Estrella>(this.apiUrl + '/guardar', estrella);
  }

  actualizarEstrella(id: number, estrella: Estrella): Observable<Estrella> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Estrella>(url, estrella);
  }

  eliminarEstrella(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
