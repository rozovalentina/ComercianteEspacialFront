import { NaveService } from './../../../shared/Nave/nave.service';
import { ActivatedRoute } from '@angular/router';
import { Nave } from './../../../model/nave/nave';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nave-detalle',
  templateUrl: './nave-detalle.component.html',
  styleUrl: './nave-detalle.component.css'
})
export class NaveDetalleComponent implements OnInit {
  nave!: Nave;
  constructor(private route: ActivatedRoute, private naveService: NaveService){}
  ngOnInit(): void {
    const idString = this.route.snapshot.paramMap.get('id');
    if(idString !== null) {
      const id = Number(idString);
      this.naveService.obtenerNaveUsuario(id).subscribe(response=>{
        this.nave= response;
      });
    }
  }

}
