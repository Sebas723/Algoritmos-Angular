import { Component } from '@angular/core';
import { 
  first, second, third,
  fourth, fifth, sixth, 
  seventh, eighth, ninth, 
  tenth, eleventh, twelfth,
  thirteenth, fourteenth, fifteenth,
  sixteenth, seventeenth, eighteenth,
  nineteenth, twentieth
} from './basicAlgoritms.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  //1. Imprimir "Hola, mundo!".
  firstAlgoritm(){
    first();
  }

  //2. Preguntar un número y mostrarlo en pantalla.
  secondAlgoritm() {
    second();
  }
  
  //3. Sumar números.
  thirdAlgoritm() {
    third();
  }
  
  // 4. Restar números.
  fourthAlgoritm() {
    fourth();
  }
  
  //5. Multiplicar números.
  fifthAlgoritm() {
    fifth();
  }
  
  //6. Dividir números (considerando la división por cero).
  sixthAlgoritm() {
    sixth();
  }
  
  //7. Calcular el área de un rectángulo.
  seventhAlgoritm() {
    seventh();
  }
  
  // 8. Calcular el perímetro de un cuadrado.
  eighthAlgoritm() {
    eighth();
  }
  
  //9. Determinar si un número es par o impar.
  ninthAlgoritm() {
    ninth();
  }
  
  //10. Convertir de Celsius a Fahrenheit.
  tenthAlgoritm() {
    tenth();
  }

  // 11. Leer tres números y encontrar el mayor.
  eleventhAlgoritm() {
    eleventh();
  }
  
  //12. Leer un número y determinar si es positivo, negativo o cero.
  twelfthAlgoritm() {
    twelfth();
  }
  
  //13. Generar numeros
  thirteenthAlgoritm() {
    thirteenth();
  }
  
  //14. Imprimir la tabla de multiplicar de un número.
  fourteenthAlgoritm() {
    fourteenth();
  }
  
  //15. Calcular el factorial de un número.
  fifteenthAlgoritm() {
    fifteenth();
  }
  
  //16. Invertir una cadena.
  sixteenthAlgoritm() {
    sixteenth();
  }
  
  //17. Calcular el promedio de un conjunto de números.
  seventeenthAlgoritm() {
    seventeenth();
  }
  
  //18. Leer una cadena y contar el número de vocales.
  eighteenthAlgoritm() {
    eighteenth();
  }
  
  // 19. Verificar si una cadena es un palíndromo.
  nineteenthAlgoritm() {
    nineteenth();
  }
  
  // 22. Generar números aleatorios.
  twentiethAlgoritm() {
    twentieth();
  }
}
