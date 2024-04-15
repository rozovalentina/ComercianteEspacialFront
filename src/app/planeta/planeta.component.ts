import { Component, OnInit } from '@angular/core';
import { Planeta } from '../model/planeta/planeta';
import { PlanetaService } from '../shared/PlanetaService/planeta.service';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {

  planetas: Planeta[];

  constructor(private planetaService: PlanetaService) { }

  ngOnInit(): void {
    this.obtenerPlanetas();
  }

  obtenerPlanetas(): void {
    this.planetaService.obtenerPlanetas()
      .subscribe(planetas => this.planetas = planetas);
  }

  eliminarPlaneta(id: number): void {
    this.planetaService.eliminarPlaneta(id)
      .subscribe(() => {
        this.planetas = this.planetas.filter(planeta => planeta.id !== id);
      });
  }
}
