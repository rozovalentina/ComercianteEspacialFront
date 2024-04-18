import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoService } from '../../shared/ProductoService/producto.service';
import { Producto } from '../../model/Producto/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class ProductoCrearComponent {
  producto: Producto = new Producto();

  constructor(private router: Router, private productoService: ProductoService) { }

  guardarProducto(): void {
    this.productoService.crearProducto(this.producto)
      .subscribe(() => this.router.navigate(['/productos']));
  }
}
