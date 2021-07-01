import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

resultado: string = '';
a = 0;

//segundo valor usando two way binding
b = '';

//primer valor usando solo event binding
obtenerA(event: Event){
  this.a = Number((<HTMLInputElement>event.target).value)
}
// obtenerB(event: Event){
//   this.b = Number((<HTMLInputElement>event.target).value)
// }
Sumar(){
  this.resultado = (this.a + Number(this.b)).toString()
}

//tmbien se puede hacer asi:
// sumar():void{
//   this.resultado = this.a + this.b;
// }
}
