/* Escreva um programa que defina três números em variáveis no seu começo e retorne true se uma 
das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if.*/

let num1 = 3;
let num2 = 2;
let num3 = 5;

if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
  console.log(true);
} else {
  console.log(false);
}
