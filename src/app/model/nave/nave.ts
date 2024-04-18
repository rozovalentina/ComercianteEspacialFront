import { Equipo } from "../equipo/equipo";
import { TipoNave } from "../TipoNave/tiponave";
export class Nave {
    id: number;
    nombre: string;
    cargaMaxima: number;
    velocidadMaxima: number;
    naveX: number;
    naveY: number;
    naveZ: number;
    tipoNave: TipoNave;
    equipo: Equipo;

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
    
    }
}