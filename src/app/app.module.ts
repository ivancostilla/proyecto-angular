import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { ComponenteConCLIComponent } from './componente-con-cli/componente-con-cli.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';
//hay que importar formsmodule para usar two way binding
@NgModule({
  declarations: [
    //acá se agregan los componentes:
    AppComponent,
    PersonasComponent,
    ComponenteConCLIComponent,
    CalculadoraComponent
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
