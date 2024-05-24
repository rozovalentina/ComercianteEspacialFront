import { Component, OnInit } from '@angular/core';
import { ComerciarService } from '../shared/ComerciarService/Comerciar.service';
import { Producto } from '../model/Producto/producto';
import { Equipo } from '../model/equipo/equipo';

@Component({
  selector: 'app-comerciar',
  templateUrl: './comerciar.component.html',
  styleUrls: ['./comerciar.component.css']
})
export class ComerciarComponent implements OnInit {
  productos: Producto[] = [];
  equipo: Equipo = new Equipo();
  estrellaId: number = 1; // ID de la estrella actual

  constructor(private comerciarService: ComerciarService) {}

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerEquipo();
  }

  obtenerProductos(): void {
    this.comerciarService.obtenerProductosNavesEnEstrella(this.estrellaId)
      .subscribe(
        (data) => this.productos = data,
        (error) => console.error('Error al obtener productos:', error)
      );
  }

  obtenerEquipo(): void {
    this.comerciarService.obtenerEquipo()
      .subscribe(
        (data) => this.equipo = data,
        (error) => console.error('Error al obtener equipo:', error)
      );
  }

  comprarProducto(producto: Producto, cantidad: number): void {
    this.comerciarService.comprarProducto(this.equipo, producto, cantidad)
      .subscribe(
        (message) => console.log('Compra exitosa:', message),
        (error) => console.error('Error al comprar producto:', error)
      );
  }

  venderProducto(producto: Producto, cantidad: number): void {
    this.comerciarService.venderProducto(this.equipo, producto, cantidad)
      .subscribe(
        (message) => console.log('Venta exitosa:', message),
        (error) => console.error('Error al vender producto:', error)
      );
  }
}
