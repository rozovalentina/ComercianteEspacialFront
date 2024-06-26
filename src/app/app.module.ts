import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

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
import { CrearTipoNaveComponent } from './tiponave/crear-tiponave/crear-tiponave.component';
import { ProductoComponent } from './producto/producto.component';
import { ProductoEditarComponent } from './producto/editar-producto/editar-producto.component';
import { ProductoCrearComponent } from './producto/crear-producto/crear-producto.component';
import { HomeComponent } from './home/home/home.component';
import { NaveDetalleComponent } from './nave/naveDetalle/nave-detalle/nave-detalle.component';
import { HeaderComponent } from './header/header/header.component';
import { LoginComponent } from './login/login/login.component';
import { CommonModule } from '@angular/common';
import { ComerciarComponent } from './comerciar/comerciar.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
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
    ProductoCrearComponent,
    ProductoEditarComponent,
    ProductoComponent,
    HomeComponent,
    HeaderComponent,
    ComerciarComponent,
    NaveDetalleComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass :AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
