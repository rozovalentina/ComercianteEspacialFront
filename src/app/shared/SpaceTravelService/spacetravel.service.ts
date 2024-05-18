import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estrella } from '../../model/estrella/estrella';

@Injectable({
  providedIn: 'root'
})
export class SpaceTravelService {

  private baseUrl = 'http://localhost:8080'; // Cambia la URL base según tu configuración

  constructor(private http: HttpClient) { }

  initiateSpaceTravel(starId: number): void {
    // Implementa la lógica para iniciar un viaje interestelar hacia la estrella seleccionada
    // Por simplicidad, puedes imprimir un mensaje en la consola indicando que el viaje se ha iniciado
    console.log('Viaje iniciado hacia la estrella con ID: ' + starId);
  }

  getTravelTime(sourceStarId: number, destinationStarId: number, shipSpeed: number): Observable<number> {
    const url = `${this.baseUrl}/estrellas/${sourceStarId}/${destinationStarId}/tiempo-viaje?velocidad=${shipSpeed}`;
    return this.http.get<number>(url);
  }
}
