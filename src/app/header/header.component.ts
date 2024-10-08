import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  bodyTittle = "Bienvenido";

  basicAlgoritmsSelected(){
    this.bodyTittle = "Algoritmos Basicos";
  }

  intermediateAlgoritmsSelected(){
    this.bodyTittle = "Algoritmos Intermedios";
  }

  technicalTestSelected(){
    this.bodyTittle = "Pruebas Tecnicas";
  }
}
