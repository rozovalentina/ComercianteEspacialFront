import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../shared/NavigationService/Navigation.service';
import { SpaceTravelService } from '../shared/SpaceTravelService/spacetravel.service';
import { EstrellaConDistancia } from '../model/EstrellaConDistancia/EstrellaConDistancia';
import { Nave } from '../model/nave/nave';
import { Equipo } from '../model/equipo/equipo';
import { TipoNave } from '../model/TipoNave/tiponave';
import { Estrella } from '../model/estrella/estrella';
import { EstrellaService } from '../shared/EstrellaService/estrella.service';
import { Planeta } from '../model/planeta/planeta';

@Component({
  selector: 'app-estrella',
  templateUrl: './estrella.component.html',
  styleUrls: ['./estrella.component.css']
})
export class EstrellaComponent implements OnInit {
  nearestStars: EstrellaConDistancia[] = [];
  travelTime: number = 0;
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

  constructor(
    private navigationService: NavigationService,
    private spaceTravelService: SpaceTravelService,
    private estrellaService: EstrellaService
  ) { }

  ngOnInit(): void {
    this.obtenerEstrellasCercanas();
  }

  obtenerEstrellasCercanas(): void {
    // Suponiendo que la nave está en la posición (0, 0, 0)
    const naveX = 0;
    const naveY = 0;
    const naveZ = 0;

    this.navigationService.getNearestStars(naveX, naveY, naveZ)
      .subscribe((data: EstrellaConDistancia[]) => {
        this.nearestStars = data;
      });
  }

  viajarA(id: number): void {
    // Suponiendo que la nave está actualmente en la estrella con id 1
    const sourceStarId = this.nave.estrella.id;
    const shipSpeed = this.nave.velocidadMaxima; // Velocidad de la nave

    this.spaceTravelService.iniciarViajeInterestelar(sourceStarId,id);
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
