import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EquipoComponent } from './equipo/equipo.component';
import { EquipoDetalleComponent } from './equipo/equipo-detalle/equipo-detalle.component';
import { CrearEquipoComponent } from './equipo/crear-equipo/crear-equipo.component';
import { EditarEquipoComponent } from './equipo/editar-equipo/editar-equipo.component';
import { EstrellaComponent } from './estrella/estrella.component';
import { EstrellaDetalleComponent } from './estrella/estrella-detalle/estrella-detalle.component';
import { CrearEstrellaComponent } from './estrella/crear-estrella/crear-estrella.component';
import { EditarEstrellaComponent } from './estrella/editar-estrella/editar-estrella.component';
import { PlanetaComponent } from './planeta/planeta.component';
import { DetallePlanetaComponent } from './planeta/planeta-detalle/planeta-detalle.component';
import { CrearPlanetaComponent } from './planeta/crear-planeta/crear-planeta.component';
import { EditarPlanetaComponent } from './planeta/editar-planeta/editar-planeta.component';
import { JugadorComponent } from './jugador/jugador.component';
import { EditarJugadorComponent } from './jugador/editar-jugador/editar-jugador.component';
import { CrearJugadorComponent } from './jugador/crear-jugador/crear-jugador.component';
import { TiponaveComponent } from './tiponave/tiponave.component';
import { EditarTiponaveComponent } from './tiponave/editar-tiponave/editar-tiponave.component';
import { TiponaveDetalleComponent } from './tiponave/tiponave-detalle/tiponave-detalle.component';
import { CrearTiponaveComponent } from './tiponave/crear-tiponave/crear-tiponave.component';
@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent,
    EquipoDetalleComponent,
    CrearEquipoComponent,
    EditarEquipoComponent,
    EstrellaComponent,
    EstrellaDetalleComponent,
    CrearEstrellaComponent,
    EditarEstrellaComponent,
    PlanetaComponent,
    DetallePlanetaComponent,
    CrearPlanetaComponent,
    EditarPlanetaComponent,
    JugadorComponent,
    EditarJugadorComponent,
    CrearJugadorComponent,
    TiponaveComponent,
    EditarTiponaveComponent,
    CrearTiponaveComponent,
    TiponaveDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
