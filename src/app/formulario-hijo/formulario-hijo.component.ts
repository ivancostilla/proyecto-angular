import { PersonasService } from './../personas.service';
import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../LoggingService.service';
import { Persona } from '../ng-for/persona.model';

@Component({
  selector: 'app-formulario-hijo',
  templateUrl: './formulario-hijo.component.html',
  styleUrls: ['./formulario-hijo.component.css'],
  //servicios: esta manera es para importarlo solo aqui
  //para importarlo globalmente hay q colocarlo enn app.module.ts
  //providers: [LoggingService]
})
export class FormularioHijoComponent {
    //@Output() personaCreada = new EventEmitter<Persona>();

    @ViewChild('nombreInput') nombreInput: ElementRef ;
    @ViewChild('apellidoInput') apellidoInput: ElementRef;

    constructor(private loggingService:LoggingService,
      private personaService:PersonasService){}

    onAgregarPersona(){
      let persona1 = new Persona(
        this.nombreInput.nativeElement.value,
        this.apellidoInput.nativeElement.value);
      //this.personaCreada.emit(persona1);
      this.personaService.agregarPersona(persona1);
    }

  }
