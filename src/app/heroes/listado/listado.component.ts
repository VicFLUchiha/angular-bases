import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['IronMan','SpiderMan','Thor','Hulk','Capitán America'];
  heroeEliminando: string[] = [];
  deletedHero?:string = "";

  borrarHeroe() {
    this.deletedHero = this.heroes.pop() || '';
    (this.deletedHero != '')?this.elemEli(this.deletedHero):"";
  }

  elemEli(elim:string) {
    this.heroeEliminando.push(elim);
  }

}
