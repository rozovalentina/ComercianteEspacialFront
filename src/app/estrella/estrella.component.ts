import { Component, OnInit } from '@angular/core';
import { Estrella } from '../model/estrella/estrella';
import { EstrellaService } from '../shared/EstrellaService/estrella.service';

@Component({
  selector: 'app-estrella',
  templateUrl: './estrella.component.html',
  styleUrls: ['./estrella.component.css']
})
export class EstrellaComponent implements OnInit {
  estrellas: Estrella[];

  constructor(private estrellaService: EstrellaService) { }

  ngOnInit(): void {
    this.obtenerEstrellas();
  }

  obtenerEstrellas(): void {
    this.estrellaService.obtenerTodasEstrellas()
      .subscribe(estrellas => this.estrellas = estrellas);
  }

  eliminarEstrella(id: number): void {
    this.estrellaService.eliminarEstrella(id)
      .subscribe(() => {
        // Eliminar la estrella de la lista después de eliminarla en el servidor
        this.estrellas = this.estrellas.filter(e => e.id !== id);
      });
  }
}
