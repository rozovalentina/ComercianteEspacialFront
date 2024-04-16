import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planeta } from '../../model/planeta/planeta';

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {
  private apiUrl = 'http://localhost:8080/planetas'; // Actualiza la URL según tu configuración

  constructor(private http: HttpClient) { }

  obtenerPlanetas(): Observable<Planeta[]> {
    return this.http.get<Planeta[]>(this.apiUrl);
  }

  guardarPlaneta(nombre: string): Observable<Planeta> {
    return this.http.post<Planeta>(`${this.apiUrl}/nuevo?nombre=${nombre}`, null);
  }

  obtenerPlaneta(id: number): Observable<Planeta> {
    return this.http.get<Planeta>(`${this.apiUrl}/${id}`);
  }

  actualizarPlaneta(id: number, nombre: string): Observable<Planeta> {
    return this.http.put<Planeta>(`${this.apiUrl}/${id}?nombre=${nombre}`, null);
  }

  eliminarPlaneta(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
