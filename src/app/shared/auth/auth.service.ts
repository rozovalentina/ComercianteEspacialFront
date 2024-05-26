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
    console.log(loginDto.nombre)
    console.log(loginDto.password)
    return this.http.post<JwtAuthenticationResponse>(`${environment.serverUrl}/auth/login`, loginDto)
      .pipe(map(jwt => {
        sessionStorage.setItem(JWT_TOKEN, jwt.token);
        sessionStorage.setItem(EMAIL, jwt.email);
        sessionStorage.setItem(ROLE, jwt.role);
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

  role() {
    return sessionStorage.getItem(ROLE);
  }
}
