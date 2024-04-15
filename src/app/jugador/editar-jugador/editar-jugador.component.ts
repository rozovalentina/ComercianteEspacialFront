import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Jugador } from '../../model/juagador/jugador';
import { JugadorService } from '../../shared/JugadorService/jugador.service';

@Component({
  selector: 'app-editar-jugador',
  templateUrl: './editar-jugador.component.html',
  styleUrls: ['./editar-jugador.component.css']
})
export class EditarJugadorComponent  {
  jugador!: Jugador ;

  constructor(private route: ActivatedRoute, private jugadorService: JugadorService, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jugadorService.obtenerJugador(id).subscribe(jugador => {
      this.jugador = jugador;
    });
  }

  actualizarJugador(): void {
    this.jugadorService.actualizarJugador(this.jugador).subscribe(() => {
      this.router.navigateByUrl('/lista-jugadores');
    });
  }
}
