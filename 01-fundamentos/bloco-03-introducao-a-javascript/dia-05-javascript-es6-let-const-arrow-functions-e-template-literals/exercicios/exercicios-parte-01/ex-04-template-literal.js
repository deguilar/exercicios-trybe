// Modifique as concatenações para template literals.

const nome = 'Adriana';
const lastName = 'Soares';

console.log('Olá' + ',' + nome + ' ' + lastName + '!');
console.log(`Olá ${nome} ${lastName}!`);

//_____________________________________________________________

function soma(a,b) {
  let resultado = a + b;

  return resultado;
}

let a = 3;
let b = 5;

console.log('O resultado da soma de ' + a + ' + ' + b + ' é: ' + soma(a,b));
console.log(`O resultado da soma de ${a} + ${b} é: ${soma(a,b)}`);