import { Component, OnInit } from '@angular/core';
import { Equipo } from '../model/equipo/equipo';
import { EquipoService } from '../shared/EquipoService/equipo.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  equipos!: Equipo[] ;

  constructor(private equipoService: EquipoService) { }

  ngOnInit(): void {
    this.getAllEquipos();
  }

  getAllEquipos(): void {
    this.equipoService.getAllEquipos().subscribe(equipos => this.equipos = equipos);
  }

  eliminarEquipo(id: number): void {
    this.equipoService.deleteEquipo(id).subscribe(() => {
      // Recargar la lista de equipos después de eliminar uno
      this.getAllEquipos();
    });
  }
}
