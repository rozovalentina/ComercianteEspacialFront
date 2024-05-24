import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../shared/NavigationService/Navigation.service';
import { SpaceTravelService } from '../shared/SpaceTravelService/spacetravel.service';
import { EstrellaConDistancia } from '../model/EstrellaConDistancia/EstrellaConDistancia';

@Component({
  selector: 'app-estrella',
  templateUrl: './estrella.component.html',
  styleUrls: ['./estrella.component.css']
})
export class EstrellaComponent implements OnInit {
  nearestStars: EstrellaConDistancia[] = [];
  travelTime: number = 0;

  constructor(
    private navigationService: NavigationService,
    private spaceTravelService: SpaceTravelService
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
    const sourceStarId = 1;
    const shipSpeed = 10; // Velocidad de la nave

    this.spaceTravelService.initiateSpaceTravel(id);
    this.spaceTravelService.getTravelTime(sourceStarId, id, shipSpeed)
      .subscribe((time: number) => {
        this.travelTime = time;
      });
  }
}
