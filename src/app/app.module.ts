import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './personas/personas.component';
import { ComponenteConCLIComponent } from './componente-con-cli/componente-con-cli.component';

@NgModule({
  declarations: [
    //acá se agregan los componentes:
    AppComponent,
    PersonasComponent,
    ComponenteConCLIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
