import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario-calculadora',
  templateUrl: './formulario-calculadora.component.html',
  styleUrls: ['./formulario-calculadora.component.css']
})
export class FormularioCalculadoraComponent{

  //envio info del hijo al padre
  @Output() resultadoSuma = new EventEmitter<number>();

  a: number;

  //segundo valor usando two way binding
  b: number;

  Sumar():void{
    //definimos nueva variable:
    let resultado = this.a + this.b;

    //enviamos la info al padre:
    this.resultadoSuma.emit(resultado);

  }

}
