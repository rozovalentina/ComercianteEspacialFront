import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductoService } from '../../../shared/ProductoService/producto.service';
import { Producto } from '../../../model/Producto/producto';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  producto!: Producto;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.obtenerProducto();
  }

  obtenerProducto(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productoService.getProductoById(id)
      .subscribe(producto => this.producto = producto);
  }

  volver(): void {
    this.location.back();
  }
}
