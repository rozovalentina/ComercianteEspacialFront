import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estrella } from '../../model/estrella/estrella';
import { Nave } from '../../model/nave/nave';

@Injectable({
  providedIn: 'root'
})
export class SpaceTravelService {

  private baseUrl = 'http://localhost:8080'; // Cambia la URL base según tu configuración

  constructor(private http: HttpClient) { }

  iniciarViajeInterestelar(naveId: number, estrellaDestinoId: number): Observable<Nave> {
    const url = `${this.baseUrl}/iniciar?naveId=${naveId}&estrellaDestinoId=${estrellaDestinoId}`;
    return this.http.post<Nave>(url, null);
  }

  getTravelTime(sourceStarId: number, destinationStarId: number, shipSpeed: number): Observable<number> {
    const url = `${this.baseUrl}/estrellas/${sourceStarId}/${destinationStarId}/tiempo-viaje?velocidad=${shipSpeed}`;
    return this.http.get<number>(url);
  }
}
