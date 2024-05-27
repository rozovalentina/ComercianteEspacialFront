import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDto } from '../../dto/login-dto';
import { JwtAuthenticationResponse } from '../../dto/jwt-authentication-response';
import { map, Observable } from 'rxjs';
import { environment } from '../../../app/environments/environment';


const JWT_TOKEN = "jwt-token";
const EMAIL = "user-email";
const ROLE = "user-role";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private http:HttpClient) { }

  login(loginDto: LoginDto): Observable<JwtAuthenticationResponse> {
    return this.http.post<JwtAuthenticationResponse>(`${environment.serverUrl}/auth/login`, loginDto)
      .pipe(map(jwt => {
        console.log(jwt.nombre);
        console.log(jwt.rol);
        console.log(jwt.token)
        sessionStorage.setItem(JWT_TOKEN, jwt.token);
        sessionStorage.setItem(EMAIL, jwt.nombre);
        sessionStorage.setItem(ROLE, jwt.rol);
        return jwt;
      }));
  }
  logout() {
    sessionStorage.removeItem(JWT_TOKEN);
    sessionStorage.removeItem(EMAIL);
    sessionStorage.removeItem(ROLE);
  }

  isAuthenticated() {
    return sessionStorage.getItem(JWT_TOKEN) != null;
  }

  token() {
    return sessionStorage.getItem(JWT_TOKEN);
  }
  nombre(){
    return sessionStorage.getItem(EMAIL);
  }
  role() {
    return sessionStorage.getItem(ROLE);
  }
  getJugadorIdFromToken(): number| null{
    const token = sessionStorage.getItem('jwt-token');
    if (token) {
      const tokenParts = token.split('.');
      if (tokenParts.length === 3) {
        const payload = JSON.parse(atob(tokenParts[1]));
        return payload.id; // Asegúrate de ajustar el nombre del campo ID según tu token
      }
    }
    return null;
  }
  
  setToken(token: string) {
    sessionStorage.setItem(JWT_TOKEN, token);
  }
}
