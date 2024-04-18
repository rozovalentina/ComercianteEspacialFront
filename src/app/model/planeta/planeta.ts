import { Producto } from "../Producto/producto";

export class Planeta {
    id: number;
    nombre: string;
    productos: Producto[];
    constructor(){
      this.id=0;
      this.nombre = '';
      this.productos= [];
    }
  }
  