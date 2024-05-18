import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estrella } from '../../model/estrella/estrella';

@Injectable({
  providedIn: 'root'
})
export class EspacioConocidoService {

  private apiUrl = 'http://localhost:8080'; // Cambia la URL base según tu configuración

  constructor(private http: HttpClient) { }

  // Método para obtener las estrellas visitadas por un jugador
  getEstrellasVisitadas(playerId: number): Observable<Estrella[]> {
    const url = `${this.apiUrl}/jugador/${playerId}/estrellas`;
    return this.http.get<Estrella[]>(url);
  }
}
