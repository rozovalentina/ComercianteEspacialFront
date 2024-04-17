import { EquipoService } from './../../shared/EquipoService/equipo.service';
import { Equipo } from './../../model/equipo/equipo';
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
  equipos!: Equipo[];
  constructor(private route: ActivatedRoute, private jugadorService: JugadorService, private router: Router, private equipoService:EquipoService) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jugadorService.obtenerJugador(id).subscribe(jugador => {
      this.jugador = jugador;
    });
    this.equipoService.getAllEquipos().subscribe(respsponce =>{
      this.equipos= respsponce;
    })
  }

  actualizarJugador(): void {
    this.jugadorService.actualizarJugador(this.jugador).subscribe(() => {
      this.router.navigateByUrl('/lista-jugadores');
    });
  }
}
