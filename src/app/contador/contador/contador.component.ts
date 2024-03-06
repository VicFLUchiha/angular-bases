import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `<h1>{{titulo}}</h1>
    <h3>La base es: <strong>{{base}}</strong></h3>
    <button (click)="reset()">Reset counter</button><br>
    <button style="margin:1em;" (click)="acumular(base)">+{{base}}</button>
    <span>{{numero}}</span>
    <button style="margin:1em;" (click)="acumular(-base)">-{{base}}</button>`
})
export class ContadorComponent{
    titulo:string = 'Contador App';
  numero:number = 10;
  base:number = 5;

  /*aumenta() {
    this.numero += 1;
  }

  decrementa() {
    this.numero -= 1;
  }*/

  acumular(valor:number) {
    this.numero += valor;
  }

  reset() {
    this.numero = 10;
  }
}