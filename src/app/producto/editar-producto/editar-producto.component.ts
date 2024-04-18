import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductoService } from '../../shared/ProductoService/producto.service';
import { Producto } from '../../model/Producto/producto';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class ProductoEditarComponent implements OnInit {
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

  guardarCambios(): void {
    this.productoService.editarProducto(this.producto.id, this.producto)
      .subscribe(() => this.location.back());
  }
}
