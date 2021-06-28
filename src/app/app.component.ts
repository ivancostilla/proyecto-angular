import { Component } from '@angular/core';

@Component({
  //etiqueta que va a usarse en el index.html:
  selector: 'app-root',
  //ruta donde vamos a armar el html de este componente
  templateUrl: './app.component.html',
  //ruta d los estilos que va a usar este componente:
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* acá agragamos propiedades */
  title = 'mi primer proyecto en angular';
  texto = 'tamo aprendiendo angular papurri.'
  tituloPersona = 'Iván'
}
