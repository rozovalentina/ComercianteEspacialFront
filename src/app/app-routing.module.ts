import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoComponent } from './equipo/equipo.component';
import { EquipoDetalleComponent } from './equipo/equipo-detalle/equipo-detalle.component';
import { CrearEquipoComponent } from './equipo/crear-equipo/crear-equipo.component';
import { EditarEquipoComponent } from './equipo/editar-equipo/editar-equipo.component';
import { EstrellaComponent } from './estrella/estrella.component';
import { EstrellaDetalleComponent } from './estrella/estrella-detalle/estrella-detalle.component';
import { CrearEstrellaComponent } from './estrella/crear-estrella/crear-estrella.component';
import { EditarEstrellaComponent } from './estrella/editar-estrella/editar-estrella.component';
import { PlanetaComponent } from './planeta/planeta.component';
import { CrearPlanetaComponent } from './planeta/crear-planeta/crear-planeta.component';
import { EditarPlanetaComponent } from './planeta/editar-planeta/editar-planeta.component';
import { DetallePlanetaComponent } from './planeta/planeta-detalle/planeta-detalle.component';


export const routes: Routes = [
  { path: '', redirectTo: '/equipos', pathMatch: 'full' },
  { path: 'equipos', component: EquipoComponent },
  { path: 'equipos/:id', component: EquipoDetalleComponent },
  { path: 'nuevo-equipo', component: CrearEquipoComponent },
  { path: 'equipos/:id/editar', component: EditarEquipoComponent },
  { path: 'estrellas', component: EstrellaComponent },
  { path: 'estrellas/nuevo', component: CrearEstrellaComponent },
  { path: 'estrellas/:id', component: EstrellaDetalleComponent },
  { path: 'estrellas/:id/editar', component: EditarEstrellaComponent }
  { path: '', redirectTo: '/planetas', pathMatch: 'full' },
  { path: 'planetas', component: PlanetaComponent },
  { path: 'planetas/nuevo', component: CrearPlanetaComponent },
  { path: 'planetas/:id/editar', component: EditarPlanetaComponent },
  { path: 'planetas/:id', component: DetallePlanetaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
