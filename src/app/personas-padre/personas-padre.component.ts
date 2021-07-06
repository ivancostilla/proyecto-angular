import { PersonasService } from './../personas.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../ng-for/persona.model';

@Component({
  selector: 'app-personas-padre',
  templateUrl: './personas-padre.component.html',
  styleUrls: ['./personas-padre.component.css']
})
export class PersonasPadreComponent implements OnInit {
  titulo: string = 'Listado de Personas';

  personas: Persona[] = [];

  //llamamos al servicio:
  constructor(private personasService: PersonasService){}

  //inicializamos la variable personas
  //acá traemos el array que tiene el personas.service
  // y lo guardmamos en la variable personas
  //el ngOnInit siempre va despues del constructor
  ngOnInit() {
    this.personas = this.personasService.personas;
  }

//   //este metodo se crea para recibir la info del hijo
//   personaAgregada(persona: Persona){
//    //this.personas = [...this.personas, persona]
//
//    //enviamos la info al servicio:
//    this.PersonasService.agregarPersona(persona)
//  }
}
