import { Component, OnInit } from '@angular/core';
import { TipoNave } from '../model/TipoNave/tiponave';
import { TipoNaveService } from '../shared/TipoNaveService/tiponave.service';
import { Nave } from '../model/nave/nave';
@Component({
  selector: 'app-tipo-nave',
  templateUrl: './tiponave.component.html',
  styleUrls: ['./tiponave.component.css']
})
export class TipoNaveComponent implements OnInit {

  tiposNaves: TipoNave[] = [];
  nave!: Nave [];
naves: any;

  constructor(private tipoNaveService: TipoNaveService) { }

  ngOnInit(): void {
    this.tipoNaveService.obtenerTiposNaves().subscribe(tiposNaves => this.tiposNaves = tiposNaves);
  }

  obtenerTiposNaves(): void {
    this.tipoNaveService.obtenerTiposNaves().subscribe(tiposNaves => this.tiposNaves = tiposNaves);
  }

  guardarTipoNave(nombre: string, descripcion: string): void {
    this.tipoNaveService.guardarTipoNave(nombre, descripcion).subscribe(() => {
      this.obtenerTiposNaves();      
    });

  
  }
}
