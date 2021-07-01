import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

titulo: string = 'Listado de Personas';
personas: Persona[] = [
  new Persona('Juan','Pérez'),
  new Persona('Laura', 'Gómez'),
  new Persona('Lolo', 'Zapata')
]
}
