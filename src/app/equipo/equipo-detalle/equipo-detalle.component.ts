import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from '../../shared/EquipoService/equipo.service';
import { Equipo } from '../../model/equipo/equipo';
import { Jugador } from '../../model/juagador/jugador';
import { Nave } from '../../model/nave/nave';

@Component({
  selector: 'app-equipo-detalle',
  templateUrl: './equipo-detalle.component.html',
  styleUrls: ['./equipo-detalle.component.css']
})
export class EquipoDetalleComponent implements OnInit {
  equipo!: Equipo ;
  jugadores!: Jugador[] ;
  naves!: Nave[] ;

  constructor(private route: ActivatedRoute, private equipoService: EquipoService) { }

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString !== null) {
      const id: number = parseInt(idString, 10); // Convierte la cadena a un número entero
    this.equipoService.getEquipoById(id).subscribe(equipo => {
      this.equipo = equipo;
      this.jugadores = equipo.jugadores;
      this.naves = equipo.naves;
    });
  }
  }
}
