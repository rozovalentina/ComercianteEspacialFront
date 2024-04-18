import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../shared/ProductoService/producto.service';
import { Producto } from '../model/Producto/producto';

@Component({
  selector: 'app-producto-lista',
  templateUrl: './producto-lista.component.html',
  styleUrls: ['./producto-lista.component.css']
})
export class ProductoListaComponent implements OnInit {
  productos: Producto[];

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): void {
    this.productoService.getProductos()
      .subscribe(productos => this.productos = productos);
  }
}
