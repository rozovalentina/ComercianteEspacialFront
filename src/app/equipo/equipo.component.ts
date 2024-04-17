import { Router } from '@angular/router';
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

  constructor(private equipoService: EquipoService, private router:Router) { }

  ngOnInit(): void {
    this.equipoService.getAllEquipos().subscribe(equipos => this.equipos = equipos);
  }

  getAllEquipos(): void {
    this.equipoService.getAllEquipos().subscribe(equipos => this.equipos = equipos);
  }

  eliminarEquipo(id: number): void {
    this.equipoService.deleteEquipo(id).subscribe(() => {
      this.getAllEquipos();
    });
  }

  verDetalles(id: Number){
    this.router.navigate(["/equipos",id,'editar'])
  }
}
