import { Equipo } from "../equipo/equipo";
export class Jugador {
    id: number;
    nombre: string;
    contrasena: string;
    rol: string;
    equipo: Equipo[];

    constructor(){
      this.id=0;
      this.nombre= '';
      this.contrasena='';
      this.rol='';
      this.equipo=[];
    }
  }
  