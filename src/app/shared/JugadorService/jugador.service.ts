import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Jugador } from '../../model/juagador/jugador';
import { Page } from '../../dto/page';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {
  private apiUrl = 'http://localhost:8080/jugadores';

  constructor(private http: HttpClient) { }

  obtenerJugadores(pageNumber: number, pageSize:number): Observable<Page> {
    const params = new HttpParams()
      .set('page', pageNumber.toString())
      .set('size', pageSize.toString());
    return this.http.get<Page>(this.apiUrl, {params});
  }

  obtenerJugador(id: number): Observable<Jugador> {
    return this.http.get<Jugador>(`${this.apiUrl}/${id}`);
  }

  guardarJugador(jugador: Jugador): Observable<Jugador> {
    return this.http.post<Jugador>(`${this.apiUrl}/guardar`, jugador);
  }

  actualizarJugador(jugador: Jugador): Observable<Jugador> {
    return this.http.put<Jugador>(`${this.apiUrl}/${jugador.id}`, jugador);
  }

  eliminarJugador(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
