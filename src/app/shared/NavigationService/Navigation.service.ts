import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EstrellaConDistancia } from '../../model/EstrellaConDistancia/EstrellaConDistancia';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private apiUrl = 'http://localhost:8080'; // Cambia la URL base según tu configuración

  constructor(private http: HttpClient) { }

  // Método para obtener las 10 estrellas más cercanas a la posición actual de la nave
  getNearestStars(naveX: number, naveY: number, naveZ: number): Observable<EstrellaConDistancia[]> {
    const url = `${this.apiUrl}/estrellas/cercanas?naveX=${naveX}&naveY=${naveY}&naveZ=${naveZ}`;
    return this.http.get<EstrellaConDistancia[]>(url);
  }
}
