import { Component, OnInit } from '@angular/core';
import { Planeta } from '../model/planeta/planeta';
import { PlanetaService } from '../shared/PlanetaService/planeta.service';
import { Page } from '../dto/page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {

  PlanetasPage!: Page;

  constructor(private planetaService: PlanetaService, private router:Router) { }

  ngOnInit(): void {
    this.obtenerPlanetas(0);
  }

  obtenerPlanetas(pageNumber: number): void {
    const pageSize = 10; // Tamaño de la página

    this.planetaService.obtenerPlanetas(pageNumber, pageSize)
      .subscribe((data: Page) => {        
        this.PlanetasPage = data;
      });   
  }
  editarPlaneta(id:number): void{
    this.router.navigate(["planetas",id, "editar"]);    
  }
  verDetalles(id:number):void{
    this.router.navigate(["/planetas",id])
  }
  eliminarPlaneta(id: number): void {
    this.planetaService.eliminarPlaneta(id)
      .subscribe(() => {
        this.obtenerPlanetas(0);
      });
  }
}
