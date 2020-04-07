import { Component, OnInit } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
//teste
export class CalculadoraComponent implements OnInit {

val:number = 0;
result:number = 10;
calculo:number;

saveValue(event) {
     this.val = Number(event.target.value);
}

btnMultiplicacao(event){
   this.calculo = this.val * this.result;
}

btnDivisao(event){
  this.calculo = this.val / this.result;
}

btnSubtracao(event){
  this.calculo = this.val - this.result;
}

btnSoma(event){
  this.calculo = this.val + this.result;
}


  constructor() { }

  ngOnInit(): void {
  }

  // conversao() {
  //   var dolarAmericano = 5.24;

  //   var valor = parseFloat(document.getElementById("text2").value);

  //   if(document.getElementById("opções").value = "Dolar Americano") {
  //     document.getElementById("valorFinal").innerHTML = (valor/dolarAmericano).toFixed(2);
  //   }
  // }

}
 