// 10 - crie um algoritmo que imprima na tela o fatorial de 10.

let numero = 10;
let soma = 1;

for (let index = 1; index <= numero; index += 1) {
    soma *= index; 
}

console.log(soma);