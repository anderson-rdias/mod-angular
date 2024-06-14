import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro',
  templateUrl: './meu-primeiro.component.html',
  styleUrl: './meu-primeiro.component.css'
})
export class MeuPrimeiroComponent {

  public lastName: string = '';
  public name: string = ''

  public year: number = 2024;

  acrescentarAno(){
    this.year++;
  }

  decrescerAno(){
    this.year--;
  }

  // actionBtn1() {
  //   this.name = 'Anderson';
  //   this.lastName = 'Dias';
  // }
}
