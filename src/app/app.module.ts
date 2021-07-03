import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { ComponenteConCLIComponent } from './componente-con-cli/componente-con-cli.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { DirectivaNgIfComponent } from './directiva-ng-if/directiva-ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { PersonaComponent } from './persona/persona.component';
import { PersonasPadreComponent } from './personas-padre/personas-padre.component';
import { FormularioHijoComponent } from './formulario-hijo/formulario-hijo.component';
import { ResultadoHijoComponent } from './resultado-hijo/resultado-hijo.component';
import { FormularioCalculadoraComponent } from './formulario-calculadora/formulario-calculadora.component';
import { DesafioCalculadoraPadreComponent } from './desafio-calculadora-padre/desafio-calculadora-padre.component';
//hay que importar formsmodule para usar two way binding
@NgModule({
  declarations: [
    //acá se agregan los componentes:
    AppComponent,
    PersonasComponent,
    ComponenteConCLIComponent,
    CalculadoraComponent,
    DirectivaNgIfComponent,
    NgForComponent,
    PersonaComponent,
    PersonasPadreComponent,
    FormularioHijoComponent,
    ResultadoHijoComponent,
    FormularioCalculadoraComponent,
    DesafioCalculadoraPadreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
