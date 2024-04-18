import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planeta } from '../../model/planeta/planeta';
import { Page } from '../../dto/page';

@Injectable({
  providedIn: 'root'
})
export class PlanetaService {
  private apiUrl = 'http://localhost:8080/planetas'; // Actualiza la URL según tu configuración

  constructor(private http: HttpClient) { }

  obtenerPlanetas(pageNumber: number, pageSize:number): Observable<Page> {
    const params = new HttpParams()
      .set('page', pageNumber.toString())
      .set('size', pageSize.toString());
    return this.http.get<Page>(this.apiUrl, {params});
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
