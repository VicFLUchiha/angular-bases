import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  //personajes:Personaje[] = [];

  nuevo: Personaje = {
    nombre: '',
    poder: 0,
  }

  /*get personajes():Personaje[] {
    return this.dbzService.personajes;
  }*/
  

  constructor(private dbzService: dbzService) {
    //this.personajes = this.dbzService.personajes;
  }

  /*agregarNuevoPersonaje(event:Personaje) {
    //La instruccion de abajo sive para realizar
    //un debugg en la aplicacion sin agregar
    //breakpoints en el navegador
    //debugger;
    this.personajes.push(event);
  }*/
  

}
