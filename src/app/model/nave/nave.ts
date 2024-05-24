import { Equipo } from "../equipo/equipo";
import { TipoNave } from "../TipoNave/tiponave";
import { Producto } from '../Producto/producto';
import { Estrella } from '../estrella/estrella';
import { Jugador } from '../jugador/jugador';

export class Nave {
  id: number;
  nombre: string;
  cargaMaxima: number;
  velocidadMaxima: number;
  naveX: number;
  naveY: number;
  naveZ: number;
  tipoNave: TipoNave;
  estrella: Estrella;
  equipo: Equipo;
  jugador: Jugador;
  productos: Producto[];
  constructor()
    {
        this.id = 0;
        this.nombre = '';
        this.cargaMaxima = 0;
        this.velocidadMaxima = 0;
        this.naveX = 0;
        this.naveY = 0;
        this.naveZ = 0;
        this.tipoNave = new TipoNave();
        this.equipo = new Equipo();
        this.estrella= new Estrella();
        this.jugador = new Jugador();
        this.productos = [];
    }
}