import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoService } from '../../shared/EquipoService/equipo.service';
import { Equipo } from '../../model/equipo/equipo';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent implements OnInit{
  equipo2: Equipo = new Equipo();

  constructor(private equipoService: EquipoService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    
  }

  guardarEquipo(): void {
    this.equipoService.saveEquipo(this.equipo2).subscribe(() => {
      this.router.navigateByUrl('/equipos');
    });
  }
}
