// Faça o teste de uma função que compara dois números e retorna true se o primeiro for maior que o segundo e false caso contrário.

const assert = require('assert');

function isAbove(num1, num2) {
  return num1 > num2;
}

// implemente seus testes aqui
// verifica se retorna falso quando o primeiro é menor que o segundo;
assert.strictEqual(isAbove(7, 10), false, 'Function is not working');
// verifica se retorna true quando o primeiro é maior que o segundo;
assert.strictEqual(isAbove(12, 10), true, 'Function is not working');