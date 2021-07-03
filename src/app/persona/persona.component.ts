import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../ng-for/persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {

  //asi pasamos as props desde el componente padre a el hijo
  //(este es el componente hijo)
  @Input() persona: Persona;

  @Input() indice: number;
}
