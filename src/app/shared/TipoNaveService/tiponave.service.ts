import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoNave } from '../../model/TipoNave/tiponave';

@Injectable({
  providedIn: 'root'
})
export class TipoNaveService {


  private apiUrl = 'http://localhost:8080/tiposnave';

  constructor(private http: HttpClient) { }

  obtenerTiposNaves(): Observable<TipoNave[]> {
    return this.http.get<TipoNave[]>(this.apiUrl);
  }

  guardarTipoNave(nombre: string, descripcion: string): Observable<TipoNave> {
    return this.http.post<TipoNave>(`${this.apiUrl}/nuevo?nombre=${nombre}&descripcion=${descripcion}`, null);
  }

  obtenerTipoNavePorId(id: number): Observable<TipoNave> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<TipoNave>(url);
  }
  actualizarTipoNave(id: number, nombre: string, descripcion: string): Observable<TipoNave> {
    const url = `${this.apiUrl}/${id}`;
    const body = { nombre, descripcion };
    return this.http.put<TipoNave>(url, body);
  }
}
