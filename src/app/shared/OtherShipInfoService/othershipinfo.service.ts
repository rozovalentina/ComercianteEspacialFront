import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nave } from '../../model/nave/nave';

@Injectable({
  providedIn: 'root'
})
export class OtherShipInfoService {

  private apiUrl = 'http://localhost:8080'; // Cambia la URL base según tu configuración

  constructor(private http: HttpClient) { }

  getOtherShipsInSameStar(playerId: number): Observable<Nave[]> {
    const url = `${this.apiUrl}/jugadores/${playerId}/nave/otras`;
    return this.http.get<Nave[]>(url);
  }
}
