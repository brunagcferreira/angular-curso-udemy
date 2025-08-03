import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.html',
  styleUrls: ['./calculadora.scss']
})
export class Calculadora {
  numero1: number =0;
  numero2: number =0;
  resultado: number =0;

  calcularResultado(){
    console.log("chamando o método de calcular resultado");
    this.resultado = this.numero1+this.numero2;
  }


}
