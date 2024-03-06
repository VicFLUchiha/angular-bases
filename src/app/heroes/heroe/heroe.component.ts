import { Component } from '@angular/core';

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {
    nombre:string = 'IronMan';
    edad:number = 45;
    reset:boolean = false;

    obtenerNombre(): string {
        //return this.nombre + '-' + this.edad;
        return `${this.nombre} - ${this.edad}`;
    }

    get nombreCapitalizado():string {
        return this.nombre.toUpperCase();
    }

    cambiarNombre():void {
        this.nombre = 'SpiderMan';
        this.reset = true;
    }

    cambiarEdad():void {
        this.edad = 25;
        this.reset = true;
    }

    resetForm():void {
        this.nombre = 'IronMan';
        this.edad = 45;
        this.reset = false;
    }
}
