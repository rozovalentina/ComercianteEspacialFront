export class Producto {
    id: number;
    nombre: string;
    factorDemanda: number;
    factorOferta: number;
    volumenUnidad: number;
    precioCompra: number;
    precioVenta: number;

    constructor(){
        this.id = 0;
        this.nombre = '';
        this.factorDemanda = 0;
        this.factorOferta = 0;
        this.precioCompra = 0;
        this.precioVenta = 0;
        this.volumenUnidad = 0;
    }
  }
  