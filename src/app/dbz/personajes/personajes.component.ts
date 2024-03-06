import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

    //@Input('data') personajes: Personaje[] = [];

    constructor(private dbzService: dbzService) {

    }

    get personajes() {
      return this.dbzService.personaje;
    }

}
