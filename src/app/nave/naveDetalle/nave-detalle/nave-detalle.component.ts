import { AuthService } from './../../../shared/auth/auth.service';
import { JugadorService } from './../../../shared/JugadorService/jugador.service';
import { ShipInfoService } from './../../../shared/ShipInfoService/shipinfo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Nave } from '../../../model/nave/nave';
import { SpaceTravelService } from '../../../shared/SpaceTravelService/spacetravel.service';
import { ComerciarService } from '../../../shared/ComerciarService/Comerciar.service';
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
  nave: Nave = { 
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
    productos : []
  };
  otrasNaves: any[] = [];

  constructor(private route: ActivatedRoute,private authService: AuthService, private shipInfoService: ShipInfoService, private spaceTravelService: SpaceTravelService,
    private comerciarService: ComerciarService,private jugadorService: JugadorService) { }

  ngOnInit(): void {
    this.obtenerInformacionDeLaNave();
  }

  obtenerInformacionDeLaNave(): void {
    const nombreJugador: string | null = this.authService.nombre();
    if (nombreJugador !== null) {
        this.jugadorService.obtenerJugadorPorNombre(nombreJugador)
            .subscribe(
                (jugador: Jugador) => {                  
                    if (jugador) {   
                      console.log(jugador.id) 
                      if(jugador.id !=undefined){
                        this.shipInfoService.obtenerInformacionDeLaNave(jugador.id)
                            .subscribe(
                                (data: any) => {                                    
                                    this.nave = data;
                                    console.log(this.nave.nombre);
                                },
                                (error: any) => {                                    
                                    console.error('Error al obtener información de la nave', error);
                                }
                            );
                      }else{
                        console.error('id jugador nula')
                      }   
                    } else {                        
                        console.error('Jugador no encontrado');
                    }
                },
                (error: any) => {                   
                    console.error('Error al obtener información del jugador', error);
                }
            );
    } else {
        console.error('Nombre de jugador es null');
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

