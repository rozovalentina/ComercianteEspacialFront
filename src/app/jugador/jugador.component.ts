import { Component, OnInit } from '@angular/core';
import { Jugador } from '../model/juagador/jugador';
import { JugadorService } from '../shared/JugadorService/jugador.service';

@Component({
  selector: 'app-lista-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  jugadores: Jugador[] = [];

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
    this.obtenerJugadores();
  }

  obtenerJugadores(): void {
    this.jugadorService.obtenerJugadores().subscribe(jugadores => {
      this.jugadores = jugadores;
    });
  }

  eliminarJugador(id: number): void {
    this.jugadorService.eliminarJugador(id).subscribe(() => {
      // Actualizar la lista de jugadores después de eliminar uno
      this.obtenerJugadores();
    });
  }
}
