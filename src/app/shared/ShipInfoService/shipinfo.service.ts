import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Nave } from '../../model/nave/nave';
import { Page } from '../../dto/page';

@Injectable({
  providedIn: 'root'
})
export class ShipInfoService {

  private baseUrl = 'http://localhost:8080/nave'; // Cambia la URL base según tu configuración

  constructor(private http: HttpClient) { }

  
  obtenerTodasNaves(pageNumber: number, pageSize:number): Observable<Page> {
    const params = new HttpParams()
      .set('page', pageNumber.toString())
      .set('size', pageSize.toString());
    return this.http.get<Page>(this.baseUrl, {params});
  }
  obtenerInformacionDeLaNave(id: number): Observable<Nave> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Nave>(url);
  }


}
