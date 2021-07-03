import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultado-hijo',
  templateUrl: './resultado-hijo.component.html',
  styleUrls: ['./resultado-hijo.component.css']
})
export class ResultadoHijoComponent {

 @Input() resultadoHijo: number;

}
