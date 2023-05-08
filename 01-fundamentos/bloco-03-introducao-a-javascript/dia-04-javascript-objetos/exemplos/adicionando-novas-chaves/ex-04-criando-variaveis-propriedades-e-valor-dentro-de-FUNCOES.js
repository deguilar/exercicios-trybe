/* Nesta etapa, você pode criar uma função responsável por adicionar novas propriedades a um objeto. Essa função deve receber três parâmetros:

Um objeto.
Uma chave nova a ser adicionada.
O valor dessa propriedade. */

let customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

let newKey = 'lastName';
let lastName = 'Ferreira';

function addProperty (objeto, chave, valor) {
  objeto[chave] = valor;
};

addProperty(customer, newKey, lastName);
console.log(customer);