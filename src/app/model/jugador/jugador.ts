import { Equipo } from "../equipo/equipo";
import { Nave } from "../nave/nave";
export class Jugador {
  id: number | undefined;
  nombre: string;
  contrasena: string;
  rol: string;
  equipo: Equipo[];
  nave: Nave;

  constructor(){
    this.nombre= '';
    this.contrasena='';
    this.rol='';
    this.equipo=[];
    this.nave = new Nave;
  }
}

  