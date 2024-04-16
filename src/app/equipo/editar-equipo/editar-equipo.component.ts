import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipoService } from '../../shared/EquipoService/equipo.service';
import { Equipo } from '../../model/equipo/equipo';

@Component({
  selector: 'app-editar-equipo',
  templateUrl: './editar-equipo.component.html',
  styleUrls: ['./editar-equipo.component.css']
})
export class EditarEquipoComponent implements OnInit {
  equipo!: Equipo;

  constructor(private route: ActivatedRoute, private equipoService: EquipoService, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.equipoService.getEquipoById(id).subscribe(equipo => this.equipo = equipo);
  }

  actualizarEquipo(): void {
    this.equipoService.updateEquipo(this.equipo.id, this.equipo).subscribe(() => {
      this.router.navigateByUrl('/equipos');
    });
  }
}
