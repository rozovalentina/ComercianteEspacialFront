import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../../model/Producto/producto';
import { Equipo } from '../../model/equipo/equipo';

@Injectable({
  providedIn: 'root'
})
export class ComerciarService {
  private apiUrl = 'http://localhost:8080/comercializar'; // URL del backend

  constructor(private http: HttpClient) {}

  obtenerProductosNavesEnEstrella(estrellaId: number): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.apiUrl}/productos/${estrellaId}`);
  }

  obtenerEquipo(): Observable<Equipo> {
    // Cambia la URL según el endpoint correcto para obtener el equipo del backend
    return this.http.get<Equipo>(`${this.apiUrl}/equipo`);
  }

  comprarProducto(equipo: Equipo, producto: Producto, cantidad: number): Observable<string> {
    const body = { equipo, producto, cantidad };
    return this.http.post<string>(`${this.apiUrl}/comprar`, body);
  }

  venderProducto(equipo: Equipo, producto: Producto, cantidad: number): Observable<string> {
    const body = { equipo, producto, cantidad };
    return this.http.post<string>(`${this.apiUrl}/vender`, body);
  }
}
