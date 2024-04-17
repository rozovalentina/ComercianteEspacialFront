import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TipoNave } from '../../model/TipoNave/tiponave';
import { TipoNaveService } from '../../shared/TipoNaveService/tiponave.service';

@Component({
  selector: 'app-crear-tipo-nave',
  templateUrl: './crear-tiponave.component.html',
  styleUrls: ['./crear-tiponave.component.css']
})
export class CrearTipoNaveComponent {

  tipoNave: TipoNave = {
    id: 0,
    nombre: '',
    descripcion: ''
  };

  constructor(
    private tipoNaveService: TipoNaveService,
    private router: Router
  ) { }

  guardarTipoNave(): void {
    this.tipoNaveService.guardarTipoNave(this.tipoNave.nombre, this.tipoNave.descripcion).subscribe(() => {
      this.router.navigate(['/tiposnave']);
    });
  }
}
