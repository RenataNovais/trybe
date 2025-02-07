// A função soma todos os valores de um array
// com for: 
// const numbers = [32, 15, 3, 2, -5, 56, 10];
// let sumNumbers = 0; // A variável 'acumula', a cada iteração do for, o resultado da operação feita lá!
// for(let i = 0; i < numbers.length; i += 1){
  // sumNumbers = sumNumbers + numbers[i];
// }
// console.log(sumNumbers); // 113
// 
// com .reduce
const numbers = [32, 15, 3, 2, -5, 56, 10];

// const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
// console.log(sumNumbers); // 113

// Ou seja:
const getSum = (result, number) => result + number;
const sumNumbers = numbers.reduce(getSum);
console.log(sumNumbers); // 113
console.log('-------');

// utilizando acumulador = 0
const getSum2 = (result, number) => {
  console.log(result); // 0 32 47 50 52 47 103
  return result + number;
  };
const sumNumbers2 = numbers.reduce(getSum2, 0); // Parâmetro adicionado ao reduce: o "0"
console.log('-- sum:');
console.log(sumNumbers2); // 113
console.log('-------');

// utilizando acumulador = 10
const getSum3 = (result, number) => {
  console.log(result); // 10 42 57 60 62 57 113
  return result + number;
  };
const sumNumbers3 = numbers.reduce(getSum3, 10);
console.log('-- sum:');
console.log(sumNumbers3); // 123
console.log('-------');

// função para buscar maior valor em um array 
const numbersBig = [50, 85, -30, 3, 15];

const getBigger = (bigger, number) => (bigger > number) ? bigger : number;

const bigger = numbersBig.reduce(getBigger, 0);
console.log(bigger); // 85

// somar todos os números pares do array
const allNumbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const sumPair = (currentValue, number) => (
  (number % 2 === 0) ? currentValue + number : currentValue
);

const sumNumbers4 = (array) => array.reduce(sumPair);
console.log('-------');
console.log(sumNumbers4(allNumbers)); // 152
