import { Router } from '@angular/router';
import { Jugador } from '../../model/juagador/jugador';
import { LoginService } from './../../shared/login/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  jugador2:Jugador= new Jugador();
  constructor(private loginService:LoginService, private router: Router){
  }
  ngOnInit(): void {
    
  }

  guardarJugador(): void {
    this.loginService.login(this.jugador2).subscribe(
      (response) => {
        console.log('Jugador guardado exitosamente:', response);
        this.router.navigate(['/nave',response.id]);
      },
      (error) => {
        console.error('Error al guardar el jugador:', error);
      }
    );
  }
}
