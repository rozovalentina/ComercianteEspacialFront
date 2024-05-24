import { Component, OnInit } from '@angular/core';
import { PlanetaService } from '../shared/PlanetaService/planeta.service';
import { ProductoService } from '../shared/ProductoService/producto.service';
import { Planeta } from '../model/planeta/planeta';
import { Producto } from '../model/Producto/producto';
import { Page } from '../dto/page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {
  planetasPage!: Page;
  planeta!: Planeta;
  productos: Producto[] = [];

  constructor(
    private planetaService: PlanetaService, 
    private productoService: ProductoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerPlanetas(0);
  }

  obtenerPlanetas(pageNumber: number): void {
    const pageSize = 10; // Tamaño de la página

    this.planetaService.obtenerPlanetas(pageNumber, pageSize)
      .subscribe((data: Page) => {        
        this.planetasPage = data;
      });   
  }

  editarPlaneta(id: number): void {
    this.router.navigate(['planetas', id, 'editar']);    
  }

  verDetalles(id: number): void {
    this.router.navigate(['/planetas', id]);
  }

  eliminarPlaneta(id: number): void {
    this.planetaService.eliminarPlaneta(id)
      .subscribe(() => {
        this.obtenerPlanetas(0);
      });
  }

  obtenerProductosDePlaneta(id: number): void {
    this.productoService.getProductosDePlaneta(id)
      .subscribe((productos: Producto[]) => {
        this.productos = productos;
      });
  }
}
