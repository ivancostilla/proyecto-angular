import { Component } from '@angular/core';
//con cli usar ng g c nombre... para un nuevo componente
@Component({
  selector: 'app-componente-con-cli',
  templateUrl: './componente-con-cli.component.html',
  styleUrls: ['./componente-con-cli.component.css']
})
export class ComponenteConCLIComponent {

  nombre: string = 'Juan';
  apellido: string = 'Perez';
  private edad: number = 29;

  personasArray = [
    {nombre:'iván',apellido: 'costilla',edad: 29},
    {nombre: 'pepe', apellido: 'juarez', edad: 30}
  ]
  //metodo para usar atributos privados
  getEdad(): number{
    return this.edad;
  }
}
