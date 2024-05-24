import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Jugador } from '../../model/jugador/jugador';
import { JugadorService } from '../../shared/JugadorService/jugador.service';

@Component({
  selector: 'app-crear-jugador',
  templateUrl: './crear-jugador.component.html',
  styleUrls: ['./crear-jugador.component.css']
})
export class CrearJugadorComponent  {
  jugador: Jugador =  new Jugador();

  constructor(private jugadorService: JugadorService, private router: Router) { }

  ngOnInit(): void {
  }

  guardarJugador(): void {
    this.jugadorService.guardarJugador(this.jugador).subscribe(() => {
      this.router.navigateByUrl('/lista-jugadores');
    });
  }
}
