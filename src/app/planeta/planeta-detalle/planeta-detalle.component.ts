import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planeta } from '../../model/planeta/planeta';
import { PlanetaService } from '../../shared/PlanetaService/planeta.service';

@Component({
  selector: 'app-planeta-detalle',
  templateUrl: './planeta-detalle.component.html',
  styleUrls: ['./planeta-detalle.component.css']
})
export class DetallePlanetaComponent implements OnInit {

  planeta: Planeta;

  constructor(private route: ActivatedRoute, private planetaService: PlanetaService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.planetaService.obtenerPlaneta(id)
      .subscribe(planeta => this.planeta = planeta);
  }
}
