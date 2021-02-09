import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Calculadora';
  numero:number = 0;
  numeroa:number = 0;
  resultado:number = 0;

  onSumar():void{
    this.resultado = this.numero + this.numeroa;
  }
}
