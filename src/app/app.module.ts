import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

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
import { TipoNaveComponent } from './tiponave/tiponave.component';
import { EditarTipoNaveComponent } from './tiponave/editar-tiponave/editar-tiponave.component';
import { TipoNaveDetallesComponent } from './tiponave/tiponave-detalle/tiponave-detalle.component';
import { CrearTipoNaveComponent } from './tiponave/crear-tiponave/crear-tiponave.component';
import { HomeComponent } from './home/home/home.component';
import { HeaderComponent } from './header/header/header.component';
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
    TipoNaveComponent,
    EditarTipoNaveComponent,
    CrearTipoNaveComponent,
    TipoNaveDetallesComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
