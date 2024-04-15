import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from '../../shared/EquipoService/equipo.service';
import { Equipo } from '../../model/equipo/equipo';
import { Jugador } from '../../model/jugador';
import { Nave } from '../../model/model/nave';

@Component({
  selector: 'app-equipo-detalle',
  templateUrl: './equipo-detalle.component.html',
  styleUrls: ['./equipo-detalle.component.css']
})
export class EquipoDetalleComponent implements OnInit {
  equipo: Equipo;
  jugadores: Jugador[];
  naves: Nave[];

  constructor(private route: ActivatedRoute, private equipoService: EquipoService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.equipoService.getEquipoById(id).subscribe(equipo => {
      this.equipo = equipo;
      this.jugadores = equipo.jugadores;
      this.naves = equipo.naves;
    });
  }
}
