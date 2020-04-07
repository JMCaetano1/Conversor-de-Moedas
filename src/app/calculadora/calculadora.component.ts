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
result:number;
calc:number;
str:any;

saveValue(event) {
     this.val = Number(event.target.value);
}

btnLibra(event){
  this.calc = 6.63
  this.result = this.val * this.calc;
  this.str = "R";
}

btnDolar(event){
  this.calc = 5.23
  this.result = this.val * this.calc;
 this.str = "R";
}

btnEuro(event){
  this.calc = 5.69
  this.result = this.val * this.calc;
 this.str = "R";
}

btnYen(event){
  this.calc = 0.048
  this.result = this.val * this.calc;
 this.str = "R";
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
 