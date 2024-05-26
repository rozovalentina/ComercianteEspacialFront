import { ShipInfoService } from './../../../shared/ShipInfoService/shipinfo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nave } from '../../../model/nave/nave';
import { SpaceTravelService } from '../../../shared/SpaceTravelService/spacetravel.service';
import { ComerciarService } from '../../../shared/ComerciarService/Comerciar.service';
import { AuthService } from '../../../shared/auth/auth.service';
import { TipoNave } from '../../../model/TipoNave/tiponave';
import { Equipo } from '../../../model/equipo/equipo';
import { Estrella } from '../../../model/estrella/estrella';
import { Jugador } from '../../../model/jugador/jugador';

@Component({
  selector: 'app-nave-detalle',
  templateUrl: './nave-detalle.component.html',
  styleUrls: ['./nave-detalle.component.css']
})
export class NaveDetalleComponent implements OnInit {
  jugadorId: number = 1; // ID del jugador autenticado
  nave: Nave = { // Initialize with default values
    id: 0,
    nombre: '',
    cargaMaxima: 0,
    velocidadMaxima: 0,
    naveX: 0,
    naveY: 0,
    naveZ: 0,
    tipoNave : new TipoNave(),
    equipo : new Equipo(),
    estrella: new Estrella(),
    jugador : new Jugador(),
    productos : []
  };
  otrasNaves: any[] = [];

  constructor(private route: ActivatedRoute, private shipInfoService: ShipInfoService, private spaceTravelService: SpaceTravelService,
    private comerciarService: ComerciarService) { }

  ngOnInit(): void {
    this.obtenerInformacionDeLaNave();
  }

  obtenerInformacionDeLaNave(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.shipInfoService.obtenerInformacionDeLaNave(id).subscribe({
      next: data => this.nave = data,
      error: err => console.error('Error fetching ship info', err)
    });
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

