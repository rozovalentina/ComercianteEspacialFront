import { Planeta } from '../../model/planeta/planeta';

export class Estrella {
  id: number;
  nombre: string;
  habitada: boolean;
  coordenadaX: number;
  coordenadaY: number;
  coordenadaZ: number;
  planetas: Planeta[];

  constructor() {
    this.id = 0;
    this.nombre = "";
    this.habitada = false;
    this.coordenadaX = 0;
    this.coordenadaY = 0;
    this.coordenadaZ = 0;
    this.planetas = [];
  }
}
