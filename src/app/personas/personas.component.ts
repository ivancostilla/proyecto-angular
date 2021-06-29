import { Component } from "@angular/core";
//para ccrear componentes inline con el CLI
//ng -g -c componente -s -t
@Component({
  //esta va a ser la etiqueta que debemos usar para mostrar el componente:
  selector: 'app-personas',
  //aqui vamos a armar el html:
  templateUrl: './personas.component.html',
  //para componentes inline
  //template: <componente-con-cli></componente-con-cli>
  styleUrls: ['./personas.component.css'],
})
export class PersonasComponent {
 persona = 'nueva persona';
}
