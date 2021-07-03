import { Component, OnInit } from '@angular/core';
import { Persona } from '../ng-for/persona.model';

@Component({
  selector: 'app-personas-padre',
  templateUrl: './personas-padre.component.html',
  styleUrls: ['./personas-padre.component.css']
})
export class PersonasPadreComponent {
  titulo: string = 'Listado de Personas';
  nombreInput: string = '';
  apellidoInput: string = '';

  personas: Persona[] = [
    new Persona('Juan','Pérez'),
    new Persona('Laura', 'Gómez'),
    new Persona('Lolo', 'Zapata')
  ]

  agregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput)
    //dos formas de agregar dinamicamente 1 persona:
    // this.personas.push( persona1 );
    this.personas = [...this.personas, persona1]
  }

}
