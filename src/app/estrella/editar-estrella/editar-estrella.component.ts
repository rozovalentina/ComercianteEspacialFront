import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstrellaService } from '../../shared/EstrellaService/estrella.service'; 
import { Estrella } from '../../model/estrella/estrella';

@Component({
  selector: 'app-editar-estrella',
  templateUrl: './editar-estrella.component.html',
  styleUrls: ['./editar-estrella.component.css']
})
export class EditarEstrellaComponent implements OnInit {
  estrella!: Estrella; // Inicializa estrella con un valor predeterminado

  constructor(private route: ActivatedRoute, private estrellaService: EstrellaService, private router: Router) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.estrellaService.obtenerEstrellaPorId(id).subscribe(estrella => this.estrella = estrella);    
  }

  actualizarEstrella(): void {
    if (this.estrella) {
      this.estrellaService.actualizarEstrella(this.estrella.id, this.estrella).subscribe(() => {
        this.router.navigateByUrl('/estrellas');
      });
    }
  }
}
