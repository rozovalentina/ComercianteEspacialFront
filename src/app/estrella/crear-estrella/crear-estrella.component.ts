import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstrellaService } from '../../shared/EstrellaService/estrella.service'; 
import { Estrella } from '../../model/estrella/estrella';

@Component({
  selector: 'app-crear-estrella',
  templateUrl: './crear-estrella.component.html',
  styleUrls: ['./crear-estrella.component.css']
})
export class CrearEstrellaComponent {
  estrella: Estrella = new Estrella();

  constructor(private estrellaService: EstrellaService, private router: Router) { }

  guardarEstrella(): void {
    this.estrellaService.guardarEstrella(this.estrella).subscribe(() => {
      this.router.navigateByUrl('/estrellas');
    });
  }
}
