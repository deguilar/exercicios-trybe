let customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

// cria a variável que salva o nome da chave
let newKey = 'lastName';

// cria a variável que salva o valor da chave
let ultimoNome = 'Ferreira';

// cria a nova chave com o valor da variável lastName
customer[newKey] = ultimoNome;

console.log(customer);