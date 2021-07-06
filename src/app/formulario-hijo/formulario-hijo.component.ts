import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Persona } from '../ng-for/persona.model';

@Component({
  selector: 'app-formulario-hijo',
  templateUrl: './formulario-hijo.component.html',
  styleUrls: ['./formulario-hijo.component.css']
})
export class FormularioHijoComponent {

  //envio de props de hijo a padre
  @Output() personaCreada = new EventEmitter<Persona>();

  //two ay bindin nos deja modificar la info, enviarla y recibirla entr componentes
  //local reference solo enviamos info de la plantilla html a el componente

  //uso de local reference y viewChild
  @ViewChild('nombreRef') nombre: ElementRef;
  @ViewChild('apellidoRef') apellido: ElementRef;


  //local reference:
  agregarPersona(){
    let persona1 = new Persona(this.nombre.nativeElement, this.apellido.nativeElement)
    //dos formas de agregar dinamicamente 1 persona:
    // this.personas.push( persona1 );
    // this.personas = [...this.personas, persona1]

    //asi enviamos la prop de hijo a pradre
    this.personaCreada.emit(persona1);
  }


}
