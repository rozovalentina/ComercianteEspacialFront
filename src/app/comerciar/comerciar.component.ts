import { Component, OnInit } from '@angular/core';
import { ComerciarService } from '../shared/ComerciarService/Comerciar.service';
import { PlanetaService } from '../shared/PlanetaService/planeta.service';
import { Producto } from '../model/Producto/producto';
import { Equipo } from '../model/equipo/equipo';
import { Planeta } from '../model/planeta/planeta';
import { Page } from '../dto/page';

@Component({
  selector: 'app-comerciar',
  templateUrl: './comerciar.component.html',
  styleUrls: ['./comerciar.component.css']
})
export class ComerciarComponent implements OnInit {
  productos: Producto[] = [];
  equipo: Equipo = new Equipo();
  estrellaId: number = 1; // ID de la estrella actual
  planetasPage!: Page;

  constructor(
    private comerciarService: ComerciarService,
    private planetaService: PlanetaService
  ) {}

  ngOnInit(): void {
    this.obtenerProductos();
    this.obtenerEquipo();
    this.obtenerPlanetas(0);
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

  obtenerPlanetas(pageNumber: number): void {
    const pageSize = 10; // Tamaño de la página

    this.planetaService.obtenerPlanetas(pageNumber, pageSize)
      .subscribe((data: Page) => {        
        this.planetasPage = data;
      });
  }
}
