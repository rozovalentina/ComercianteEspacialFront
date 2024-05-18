import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../../model/Rol/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private apiUrl = 'http://localhost:8080/roles'; // Cambia la URL base según tu configuración

  constructor(private http: HttpClient) { }

  obtenerTodosLosRoles(): Observable<Rol[]> {
    const url = `${this.apiUrl}`;
    return this.http.get<Rol[]>(url);
  }

  obtenerRolPorId(id: number): Observable<Rol> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Rol>(url);
  }

  guardarRol(rol: Rol): Observable<Rol> {
    const url = `${this.apiUrl}/nuevo`;
    return this.http.post<Rol>(url, rol);
  }

  eliminarRolPorId(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
