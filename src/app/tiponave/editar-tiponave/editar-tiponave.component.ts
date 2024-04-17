import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoNave } from '../../model/TipoNave/tiponave';
import { TipoNaveService } from '../../shared/TipoNaveService/tiponave.service';

@Component({
  selector: 'app-editar-tiponave',
  templateUrl: './editar-tiponave.component.html',
  styleUrls: ['./editar-tiponave.component.css']
})
export class EditarTipoNaveComponent implements OnInit {

  tipoNave: TipoNave | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tipoNaveService: TipoNaveService
  ) { }

  ngOnInit(): void {
    this.obtenerDetallesTipoNave();
  }

  obtenerDetallesTipoNave(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tipoNaveService.obtenerTipoNavePorId(id).subscribe(tipoNave => this.tipoNave = tipoNave);
  }

  guardarCambios(): void {
    if (this.tipoNave) {
      this.tipoNaveService.actualizarTipoNave(this.tipoNave.id,this.tipoNave.nombre, this.tipoNave.descripcion).subscribe(() => {
        this.router.navigate(['/tiposnave']);
      });
    }
  }
}
