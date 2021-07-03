import { Component, OnInit } from '@angular/core';
import { Persona } from '../ng-for/persona.model';

@Component({
  selector: 'app-personas-padre',
  templateUrl: './personas-padre.component.html',
  styleUrls: ['./personas-padre.component.css']
})
export class PersonasPadreComponent {
  titulo: string = 'Listado de Personas';

  personas: Persona[] = [
    new Persona('Juan','Pérez'),
    new Persona('Laura', 'Gómez'),
    new Persona('Lolo', 'Zapata')
  ]

  //este metodo se crea para recibir la info del hijo
  personaAgregada(persona: Persona){
    this.personas = [...this.personas, persona]
  }
}
