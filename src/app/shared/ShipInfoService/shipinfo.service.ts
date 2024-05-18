import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nave } from '../../model/nave/nave';

@Injectable({
  providedIn: 'root'
})
export class ShipInfoService {

  private baseUrl = 'http://localhost:8080'; // Cambia la URL base según tu configuración

  constructor(private http: HttpClient) { }

  getPlayerShipInfo(playerId: number): Observable<Nave> {
    const url = `${this.baseUrl}/jugadores/${playerId}/nave`; // Asumiendo que la URL de la nave asociada a un jugador es /jugadores/{playerId}/nave
    return this.http.get<Nave>(url);
  }
}
