import { Nave } from './../nave/nave';
import { Jugador } from './../juagador/jugador';


export class Equipo {
    id: number;
    nombre: string;
    dinero: number;
    jugadores: Jugador[];
    naves: Nave[];
  constructor(){
    this.id = 0;
    this.dinero=0;
    this.nombre="";
    this.jugadores=[];
    this.naves = [];
  }
  agregarJugador(jugador: Jugador){
      this.jugadores.push(jugador);
  }
  agregarNave(nave: Nave){
    this.naves.push(nave);
  }
}
  