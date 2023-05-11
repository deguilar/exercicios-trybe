const printName2 = function () {
  const myName = 'Lucas';
  return myName;
};

console.log(printName2());


// MESMA COISA DE:

const printName = () => {           
  const myName = 'Lucas';
  return myName;
};

console.log(printName());


// Quando não há nada no corpo da função além do que será retornado, a sintaxe da arrow function permite simplificar ainda mais a função printName por meio da omissão do return e das chaves.

const printName3 = () => 'Lucas';

console.log(printName3());