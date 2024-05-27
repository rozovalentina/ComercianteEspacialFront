import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EstrellaService } from '../../shared/EstrellaService/estrella.service';
import { Estrella } from '../../model/estrella/estrella';
import { Planeta } from '../../model/planeta/planeta';
import { Nave } from '../../model/nave/nave';
import { TipoNave } from '../../model/TipoNave/tiponave';
import { Equipo } from '../../model/equipo/equipo';

@Component({
  selector: 'app-estrella-detalle',
  templateUrl: './estrella-detalle.component.html',
  styleUrls: ['./estrella-detalle.component.css']
})
export class EstrellaDetalleComponent implements OnInit {
  estrella!: Estrella;
  nave: Nave = {
    id: 0,
    nombre: '',
    cargaMaxima: 0,
    velocidadMaxima: 0,
    naveX: 0,
    naveY: 0,
    naveZ: 0,
    tipoNave: new TipoNave(),
    equipo: new Equipo(),
    estrella: new Estrella(),
    productos: []
  };
  planetas: Planeta[] = [];

  constructor(private route: ActivatedRoute, private estrellaService: EstrellaService) { }

  ngOnInit(): void {
    this.cargarPlanetas();

  }
  cargarPlanetas(): void {
    this.estrellaService.obtenerPlanetasPorEstrella(this.nave.estrella.id).subscribe(
      (planetas: Planeta[]) => {
        this.planetas = planetas;
      },
      error => {
        console.error('Error al cargar los planetas:', error);
      }
    );
  }
}

