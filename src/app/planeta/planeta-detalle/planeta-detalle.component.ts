import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planeta } from '../../model/planeta/planeta';
import { PlanetaService } from '../../shared/PlanetaService/planeta.service';
import { Producto } from '../../model/Producto/producto';

@Component({
  selector: 'app-planeta-detalle',
  templateUrl: './planeta-detalle.component.html',
  styleUrls: ['./planeta-detalle.component.css']
})
export class DetallePlanetaComponent implements OnInit {

  planeta!: Planeta;
  productos!: Producto[];
  constructor(private route: ActivatedRoute, private planetaService: PlanetaService) { }

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString !== null) {
      const id: number = parseInt(idString, 10); // Convierte la cadena a un número entero
      this.planetaService.obtenerPlaneta(id)
      .subscribe(planeta => {
        this.planeta = planeta
        this.productos=this.planeta.productos;}
      );
      }      
  }
}
