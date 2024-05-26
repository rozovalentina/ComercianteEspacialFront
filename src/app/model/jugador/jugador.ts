import { Equipo } from "../equipo/equipo";
export class Jugador {
    id: string;
    nombre: string;
    contrasena: string;
    rol: string;
    equipo: Equipo[];

    constructor(){
      this.id= '';
      this.nombre= '';
      this.contrasena='';
      this.rol='';
      this.equipo=[];
    }
  }
  