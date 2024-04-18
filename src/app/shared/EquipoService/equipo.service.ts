import { Equipo } from './../../model/equipo/equipo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Page } from '../../dto/page';

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

  getAllEquipos(pageNumber: number, pageSize:number): Observable<Page> {
    const params = new HttpParams()
      .set('page', pageNumber.toString())
      .set('size', pageSize.toString());
    return this.http.get<Page>(this.apiUrl, {params});    
  }

  getEquipoById(id: number): Observable<Equipo> {
    return this.http.get<Equipo>(`${this.apiUrl}/${id}`,this.httpOptions);
  }

  saveEquipo(equipo: Equipo): Observable<Equipo> {
    return this.http.post<Equipo>(`${this.apiUrl}/guardar`, equipo,this.httpOptions);
  }

  updateEquipo(id: number, equipo: Equipo): Observable<Equipo> {
    return this.http.put<Equipo>(`${this.apiUrl}/${id}`, equipo,this.httpOptions);
  }

  deleteEquipo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`,this.httpOptions);
  }
}
