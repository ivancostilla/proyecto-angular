import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-desafio-calculadora-padre',
  templateUrl: './desafio-calculadora-padre.component.html',
  styleUrls: ['./desafio-calculadora-padre.component.css']
})
export class DesafioCalculadoraPadreComponent {

  resultadoPadre: number;

  Resultado(resultado: number){
    this.resultadoPadre = resultado;
  }

}
