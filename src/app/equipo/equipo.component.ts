import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Equipo } from '../model/equipo/equipo';
import { EquipoService } from '../shared/EquipoService/equipo.service';
import { Page } from '../dto/page';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {
  equipoPage!: Page;

  constructor(private equipoService: EquipoService, private router:Router) { }

  ngOnInit(): void {
    this.getAllEquipos(0);
  }

  getAllEquipos(pageNumber: number): void {
    const pageSize = 10; // Tamaño de la página

    this.equipoService.getAllEquipos(pageNumber,pageSize)
    .subscribe((data:Page)=>{
      this.equipoPage= data;
    });
  }

  eliminarEquipo(id: number): void {
    this.equipoService.deleteEquipo(id).subscribe(() => {
      this.getAllEquipos(0);
    });
  }

  verDetalles(id: Number){
    this.router.navigate(["/equipos",id,'editar'])
  }
}
