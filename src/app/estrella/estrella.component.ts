import { Component, OnInit } from '@angular/core';
import { Estrella } from '../model/estrella/estrella';
import { EstrellaService } from '../shared/EstrellaService/estrella.service';
import { Page } from '../dto/page';

@Component({
  selector: 'app-estrella',
  templateUrl: './estrella.component.html',
  styleUrls: ['./estrella.component.css']
})
export class EstrellaComponent implements OnInit {  
  estrellasPage!: Page;

  constructor(private estrellaService: EstrellaService) { }

  ngOnInit(): void {    
    this.obtenerEstrellas(0);
  }

  obtenerEstrellas(pageNumber: number): void {    
    const pageSize = 10; // Tamaño de la página

    this.estrellaService.obtenerTodasEstrellas(pageNumber, pageSize)
      .subscribe((data: Page) => {        
        this.estrellasPage = data;
      });    
  }

  eliminarEstrella(id: number): void {
    this.estrellaService.eliminarEstrella(id)
      .subscribe(() => {
        this.obtenerEstrellas(0);
      });
  }
}
