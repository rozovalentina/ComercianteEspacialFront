import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoNave } from '../../model/TipoNave/tiponave';

@Injectable({
  providedIn: 'root'
})
export class TipoNaveService {
  obtenerTipoNave(id: number) {
    throw new Error('Method not implemented.');
  }

  private apiUrl = '/api/tiposnave';

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
}
