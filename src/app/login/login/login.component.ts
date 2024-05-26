import { Router } from '@angular/router';
import { Jugador } from '../../model/jugador/jugador';
import { AuthService } from './../../shared/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../../dto/login-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginDto : LoginDto = new LoginDto("","");
  constructor(private auth:AuthService, private router: Router){
  }
  ngOnInit(): void {
    this.auth.logout();
  }

  login() {
    this.auth.login(this.loginDto)
      .subscribe({
        next: jwt => {
          console.log(jwt);
          this.router.navigate(["/home"]);
        },
        error: err => { console.error("Login failed:", err) }
      });
  }
}
