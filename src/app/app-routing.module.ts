import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';
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
import { JugadorComponent } from './jugador/jugador.component';
import { EditarJugadorComponent } from './jugador/editar-jugador/editar-jugador.component';
import { CrearJugadorComponent } from './jugador/crear-jugador/crear-jugador.component';
import { TipoNaveComponent } from './tiponave/tiponave.component';
import { EditarTipoNaveComponent } from './tiponave/editar-tiponave/editar-tiponave.component';
import { CrearTipoNaveComponent } from './tiponave/crear-tiponave/crear-tiponave.component';
import { ProductoListaComponent } from './producto/producto.component';
import { ProductoEditarComponent } from './producto/editar-producto/editar-producto.component';
import { ProductoCrearComponent } from './producto/crear-producto/crear-producto.component';
import { ProductoDetalleComponent } from './producto/crear-producto/producto-detalle/producto-detalle.component';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'equipos', component: EquipoComponent },
  { path: 'equipos/:id', component: EquipoDetalleComponent },
  { path: 'nuevo-equipo', component: CrearEquipoComponent },
  { path: 'equipos/:id/editar', component: EditarEquipoComponent },
  { path: 'estrellas', component: EstrellaComponent },
  { path: 'estrellas/nuevo', component: CrearEstrellaComponent },
  { path: 'estrellas/:id', component: EstrellaDetalleComponent },
  { path: 'estrellas/:id/editar', component: EditarEstrellaComponent },
  { path: 'planetas', component: PlanetaComponent },
  { path: 'planetas/nuevo', component: CrearPlanetaComponent },
  { path: 'planetas/:id/editar', component: EditarPlanetaComponent },
  { path: 'planetas/:id', component: DetallePlanetaComponent },
  { path: 'jugadores', component: JugadorComponent },
  { path: 'editar-jugador/:id', component: EditarJugadorComponent },
  { path: 'crear-jugador', component: CrearJugadorComponent },
  { path: 'tiponave', component: TipoNaveComponent },
  { path: 'tiponave/nuevo', component: CrearTipoNaveComponent },
  { path: 'tiponave/:id/editar', component: EditarTipoNaveComponent },
  { path: 'productos', component: ProductoListaComponent },
  { path: 'editar-producto/:id', component: ProductoEditarComponent },
  { path: 'crear-producto', component: ProductoCrearComponent },
  { path: 'productos/:id', component: ProductoDetalleComponent },
  { path: 'home',component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

  providers: [provideRouter(routes,withComponentInputBinding())]
})
export class AppRoutingModule { }
