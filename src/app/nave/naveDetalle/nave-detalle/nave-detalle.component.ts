import { ShipInfoService } from './../../../shared/ShipInfoService/shipinfo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nave } from '../../../model/nave/nave';
import { SpaceTravelService } from '../../../shared/SpaceTravelService/spacetravel.service';
import { ComerciarService } from '../../../shared/ComerciarService/Comerciar.service';
import { AuthService } from '../../../shared/auth/auth.service';

@Component({
  selector: 'app-nave-detalle',
  templateUrl: './nave-detalle.component.html',
  styleUrls: ['./nave-detalle.component.css']
})
export class NaveDetalleComponent implements OnInit {
  jugadorId: number = 1; // ID del jugador autenticado
  nave!: Nave;
  otrasNaves: any[] = [];

  constructor(private route: ActivatedRoute, private shipInfoService: ShipInfoService, private spaceTravelService: SpaceTravelService,
    private comerciarService: ComerciarService) { }

  ngOnInit(): void {
    this.obtenerInformacionDeLaNave();
  }

  obtenerInformacionDeLaNave(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.shipInfoService.obtenerInformacionDeLaNave(id).subscribe(data => this.nave = data);
  }


  viajar(): void {
    if (this.nave && this.nave.id) {
      const destinationStarId = 1; // Aquí puedes obtener el ID de la estrella destino
      this.spaceTravelService.initiateSpaceTravel(destinationStarId);
      console.log('Viaje iniciado hacia la estrella con ID:', destinationStarId);
    }
  }

  comerciar(): void {
    if (this.nave) {
      const estrellaId = 1; // Aquí puedes obtener el ID de la estrella actual
      this.comerciarService.obtenerProductosNavesEnEstrella(estrellaId).subscribe(productos => {
        console.log('Productos disponibles para comerciar:', productos);
      });
    }
  }
}

