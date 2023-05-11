// Transforme a função numeroAleatorio em uma arrow function.

// function numeroAleatorio() {
//   return Math.random();
// }
// console.log(numeroAleatorio());

const numeroAleatorio = () => {
  return Math.random()
}
console.log(numeroAleatorio());

// Ou

const numeroAleatorio2 = () => (Math.random())

console.log(numeroAleatorio2());


//____________________________________________________________

//Transforme a função hello em uma arrow function

// function hello(nome) {
//   return `Olá, ${nome}!`
// }
// let nome = 'Ivan';
// console.log(hello(nome));

const hello = (nome) => {
  return `Olá, ${nome}!`
}

let nome = 'Ivan';

console.log(hello(nome));


//____________________________________________________________

//Transforme a função nomeCompleto em uma arrow function.

// function nomeCompleto(nome, sobrenome) {
//   return `${nome} ${sobrenome}`
// }
// let nome = 'Ivan';
// let sobrenome = 'Pires';
// console.log(nomeCompleto(nome, sobrenome));

const nomeCompleto = (nome, sobrenome) => {
  return `${nome} ${sobrenome}`
}
let nome2 = 'Ivan';
let sobrenome = 'Pires';
console.log(nomeCompleto(nome2, sobrenome));