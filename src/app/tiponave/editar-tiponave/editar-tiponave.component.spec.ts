import { TipoNaveService } from './../../shared/TipoNaveService/tiponave.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TipoNave } from '../../model/TipoNave/tiponave';
@Component({
  selector: 'app-editar-tiponave',
  templateUrl: './editar-tiponave.component.html',
  styleUrls: ['./editar-tiponave.component.css']
})
export class EditarTipoNaveComponent implements OnInit {
  tiponave!: TipoNave;

  constructor(
    private route: ActivatedRoute,
    private tiponaveservice: TipoNaveService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.obtenerProducto();
  }

  obtenerProducto(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tiponaveservice.obtenerTipoNavePorId(id)
      .subscribe(TipoNave => this.tiponave = TipoNave);
  }

  guardarCambios(): void {
    this.tiponaveservice.actualizarTipoNave(this.tiponave.id, this.tiponave.descripcion, this.tiponave.nombre)
      .subscribe(() => this.location.back());
  }
}