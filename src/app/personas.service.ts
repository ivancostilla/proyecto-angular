import { Persona } from "./ng-for/persona.model";

export class PersonasService {
  personas: Persona[] =
    [
      new Persona('Juan','Pérez'),
      new Persona('Laura', 'Gómez'),
      new Persona('Lolo', 'Zapata')
    ]

    agregarPersona(persona: Persona){
      this.personas = [...this.personas, persona]
      console.log(this.personas)
    }
}
