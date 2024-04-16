import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TipoNave } from '../../model/TipoNave/tiponave';
import { TipoNaveService } from '../../shared/TipoNaveService/tiponave.service';

@Component({
  selector: 'app-tipo-nave-detalles',
  templateUrl: './tiponave-detalle.component.html',
  styleUrls: ['./tiponave-detalle.component.css']
})
export class TipoNaveDetallesComponent implements OnInit {

  tipoNave: TipoNave | undefined;

  constructor(
    private route: ActivatedRoute,
    private tipoNaveService: TipoNaveService
  ) { }

  ngOnInit(): void {
    this.obtenerDetallesTipoNave();
  }

  obtenerDetallesTipoNave(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tipoNaveService.obtenerTipoNave(id).subscribe(tipoNave => this.tipoNave = tipoNave);
  }
}
