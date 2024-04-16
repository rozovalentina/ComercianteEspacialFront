import { Component, OnInit } from '@angular/core';
import { TipoNave } from '../model/TipoNave/tiponave';
import { TipoNaveService } from '../shared/TipoNaveService/tiponave.service';

@Component({
  selector: 'app-tipo-nave',
  templateUrl: './tiponave.component.html',
  styleUrls: ['./tiponave.component.css']
})
export class TipoNaveComponent implements OnInit {

  tiposNaves: TipoNave[] = [];

  constructor(private tipoNaveService: TipoNaveService) { }

  ngOnInit(): void {
    this.obtenerTiposNaves();
  }

  obtenerTiposNaves(): void {
    this.tipoNaveService.obtenerTiposNaves().subscribe(tiposNaves => this.tiposNaves = tiposNaves);
  }

  guardarTipoNave(nombre: string, descripcion: string): void {
    this.tipoNaveService.guardarTipoNave(nombre, descripcion).subscribe(() => {
      this.obtenerTiposNaves();
      // Aquí puedes agregar lógica adicional después de guardar el tipo de nave, si es necesario
    });

  
  }
}
