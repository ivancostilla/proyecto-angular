import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from '../ng-for/persona.model';

@Component({
  selector: 'app-formulario-hijo',
  templateUrl: './formulario-hijo.component.html',
  styleUrls: ['./formulario-hijo.component.css']
})
export class FormularioHijoComponent {

  //envio de props de hijo a padre
  @Output() personaCreada = new EventEmitter<Persona>();


  nombreInput: string = '';
  apellidoInput: string = '';
  agregarPersona(){
    let persona1 = new Persona(this.nombreInput,this.apellidoInput)
    //dos formas de agregar dinamicamente 1 persona:
    // this.personas.push( persona1 );
    // this.personas = [...this.personas, persona1]

    //asi enviamos la prop de hijo a pradre
    this.personaCreada.emit(persona1);
  }


}
