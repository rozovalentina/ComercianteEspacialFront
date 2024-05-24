import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../shared/ProductoService/producto.service';
import { Producto } from '../model/Producto/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
eliminarProducto(arg0: number) {
throw new Error('Method not implemented.');
}
editarProducto(arg0: number) {
  throw new Error('Method not implemented.');
  }
  productos!: Producto[];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productoService.getProductos()
      .subscribe(productos => this.productos = productos);
  }
}
