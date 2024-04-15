import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planeta } from '../../model/planeta/planeta';
import { PlanetaService } from '../../shared/PlanetaService/planeta.service';

@Component({
  selector: 'app-editar-planeta',
  templateUrl: './editar-planeta.component.html',
  styleUrls: ['./editar-planeta.component.css']
})
export class EditarPlanetaComponent implements OnInit {

  planeta: Planeta;

  constructor(private route: ActivatedRoute, private router: Router, private planetaService: PlanetaService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.planetaService.obtenerPlaneta(id)
      .subscribe(planeta => this.planeta = planeta);
  }

  guardarCambios(): void {
    this.planetaService.actualizarPlaneta(this.planeta.id, this.planeta.nombre)
      .subscribe(() => this.router.navigate(['/planetas']));
  }
}
