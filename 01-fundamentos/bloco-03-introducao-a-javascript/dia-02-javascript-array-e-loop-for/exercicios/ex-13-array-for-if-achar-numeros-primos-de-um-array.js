// 13 - Um número primo é um número inteiro maior que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let maiorNumero = 0;

for (let index = 2; index <= 50; index += 1) {
    let ePrimo = true;
    for (let indexDivisor = 2; indexDivisor < index; indexDivisor += 1) {
        if (index % indexDivisor === 0) {
        ePrimo = false;
        }
    }
    if (ePrimo) {
        maiorNumero = index
    }
}

console.log(maiorNumero);