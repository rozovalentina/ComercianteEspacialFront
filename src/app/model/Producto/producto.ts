export  class Producto {
    id: number;
    nombre: string;
    factorDemanda: number;
    factorOferta: number;
    volumenUnidad: number;
    precioVenta: number;
    precioCompra: number;
    cantidad: number;
    naveId: number;


    constructor(){
        this.id = 0;
        this.nombre = '';
        this.factorDemanda = 0;
        this.factorOferta = 0;
        this.precioCompra = 0;
        this.precioVenta = 0;
        this.volumenUnidad = 0;
        this.cantidad=0;
        this.naveId=0;
    }
  }
  