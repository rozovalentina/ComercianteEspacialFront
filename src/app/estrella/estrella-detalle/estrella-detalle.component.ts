import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EstrellaService } from '../../shared/EstrellaService/estrella.service'; 
import { Estrella } from '../../model/estrella/estrella';
import { Planeta } from '../../model/planeta/planeta';

@Component({
  selector: 'app-estrella-detalle',
  templateUrl: './estrella-detalle.component.html',
  styleUrls: ['./estrella-detalle.component.css']
})
export class EstrellaDetalleComponent implements OnInit {
  estrella: Estrella;
  planetas: Planeta[];

  constructor(private route: ActivatedRoute, private estrellaService: EstrellaService) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.estrellaService.obtenerEstrellaPorId(id).subscribe(estrella => {
      this.estrella = estrella;
      this.planetas = estrella.planetas;
    });
  }
}
