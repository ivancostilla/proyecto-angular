export class Persona{
  //sintaxis larga:
  /* nombre: string= '';
  apellido: string = '';

  constructor(nombre: string, apellido: string){
    this.nombre = nombre;
    this.apellido = apellido;
  } */

  //sintaxis simplificada:
  //acá declaramos e inicializamos las variables con ts
  constructor( public nombre: string, public apellido: string){
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
