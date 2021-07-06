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
export class FormularioHijoComponent implements OnInit {

  //envio de props de hijo a padre
  @Output() personaCreada = new EventEmitter<Persona>();

  //two ay bindin nos deja modificar la info, enviarla y recibirla entr componentes
  //local reference solo enviamos info de la plantilla html a el componente

  //uso de local reference y viewChild
  @ViewChild('nombreRef') nombre: ElementRef;
  @ViewChild('apellidoRef') apellido: ElementRef;

  //servicios:
 constructor(private loggingService: LoggingService){}
 ngOnInit(){

 }
  //local reference:
  agregarPersona(){
    let persona1 = new Persona(this.nombre.nativeElement.value, this.apellido.nativeElement.value)
    //dos formas de agregar dinamicamente 1 persona:
    // this.personas.push( persona1 );
    // this.personas = [...this.personas, persona1]

    //asi enviamos la prop de hijo a pradre
    this.personaCreada.emit(persona1);

    //servicios
    this.loggingService.enviarMensajeAConsola("mensaje enviado con service: hola")
    this.loggingService.enviarMensajeAConsola("enviamos persona: " + persona1.nombre + persona1.apellido)
  }


}
