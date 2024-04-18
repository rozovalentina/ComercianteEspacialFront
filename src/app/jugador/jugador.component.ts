import { Component, OnInit } from '@angular/core';
import { Jugador } from '../model/juagador/jugador';
import { JugadorService } from '../shared/JugadorService/jugador.service';
import { Page } from '../dto/page';

@Component({
  selector: 'app-lista-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {
  jugadoresPage!: Page;

  constructor(private jugadorService: JugadorService) { }

  ngOnInit(): void {
    this.obtenerJugadores(0);
  }

  obtenerJugadores(pageNumber: number): void {
    const pageSize = 10; // Tamaño de la página

    this.jugadorService.obtenerJugadores(pageNumber, pageSize)
      .subscribe((data: Page) => {        
        this.jugadoresPage = data;
      });   
  }

  eliminarJugador(id: number): void {
    this.jugadorService.eliminarJugador(id).subscribe(() => {
      // Actualizar la lista de jugadores después de eliminar uno
      this.obtenerJugadores(0);
    });
  }
}
