import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Planeta } from '../../model/planeta/planeta';
import { PlanetaService } from '../../shared/PlanetaService/planeta.service';

@Component({
  selector: 'app-crear-planeta',
  templateUrl: './crear-planeta.component.html',
  styleUrls: ['./crear-planeta.component.css']
})
export class CrearPlanetaComponent {

  planeta!=Planeta={}

  constructor(private router: Router, private planetaService: PlanetaService) { }

  guardarPlaneta(): void {
    this.planetaService.guardarPlaneta(this.nombre)
      .subscribe(() => this.router.navigate(['/planetas']));
  }
}
