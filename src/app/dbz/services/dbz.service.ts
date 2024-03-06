import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class dbzService {

    private personajes: Personaje[] = [
        {
          nombre: "Goku",
          poder: 15000
        },
        {
          nombre: "Vegeta",
          poder: 13000
        },
        {
          nombre: "Gohan",
          poder: 10000
        }
      ];

    constructor() {
        console.log("Servicio inicializado");
    }

    get personaje():Personaje[] {
        return [...this.personajes];
    }

    agregarPersonaje(personaje: Personaje) {
        this.personajes.push(personaje);
    }

}