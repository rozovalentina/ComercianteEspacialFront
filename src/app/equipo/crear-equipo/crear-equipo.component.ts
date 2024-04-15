import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EquipoService } from '../../shared/EquipoService/equipo.service';
import { Equipo } from '../../model/equipo/equipo';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent {
  equipo: Equipo = new Equipo();

  constructor(private equipoService: EquipoService, private router: Router) { }

  guardarEquipo(): void {
    this.equipoService.saveEquipo(this.equipo).subscribe(() => {
      this.router.navigateByUrl('/equipos');
    });
  }
}
