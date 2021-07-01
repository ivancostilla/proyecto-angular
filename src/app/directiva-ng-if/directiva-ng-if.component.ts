import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva-ng-if',
  templateUrl: './directiva-ng-if.component.html',
  styleUrls: ['./directiva-ng-if.component.css']
})
export class DirectivaNgIfComponent{
  persona = 'nueva persona';
  mensaje = 'No se ha agregado ninguna persona';
  mostrar= false;
  agregarPersona1(){
    this.mostrar= true;
    this.mensaje = 'Persona Agregada';
   }
}
