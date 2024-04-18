import { Observable } from 'rxjs';
import { Nave } from './../../model/nave/nave';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NaveService {
  private apiUrl = 'http://localhost:8080/ship-info';
  constructor(private http: HttpClient) { }

  obtenerNaveUsuario(id: number):Observable<Nave>{
    return  this.http.get<Nave>(`${this.apiUrl}/${id}`);
  }
}
