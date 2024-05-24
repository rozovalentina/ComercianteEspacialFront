import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nave } from '../../../model/nave/nave';
import { NaveService } from '../../../shared/Nave/nave.service';
import { SpaceTravelService } from '../../../shared/SpaceTravelService/spacetravel.service';
import { ComerciarService } from '../../../shared/ComerciarService/Comerciar.service';

@Component({
  selector: 'app-nave-detalle',
  templateUrl: './nave-detalle.component.html',
  styleUrls: ['./nave-detalle.component.css']
})
export class NaveDetalleComponent implements OnInit {
  nave!: Nave;

  constructor(
    private route: ActivatedRoute,
    private naveService: NaveService,
    private spaceTravelService: SpaceTravelService,
    private comerciarService: ComerciarService
  ) {}

  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if (idString !== null) {
      const id = Number(idString);
      this.naveService.obtenerNaveUsuario(id).subscribe(response => {
        this.nave = response;
      });
    }
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

