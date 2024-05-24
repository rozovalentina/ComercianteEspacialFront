import { Nave } from './../nave/nave';
import { Jugador } from '../jugador/jugador';
import { Estrella } from './../estrella/estrella';

export class Equipo {
  id: number;
  nombre: string;
  dinero: number;
  jugadores: Jugador[];
  naves: Nave[];
  estrella: Estrella;

  constructor(){
    this.id = 0;
    this.dinero=0;
    this.nombre="";
    this.jugadores=[];
    this.naves = [];
    this.estrella= new Estrella();
  }
}
  