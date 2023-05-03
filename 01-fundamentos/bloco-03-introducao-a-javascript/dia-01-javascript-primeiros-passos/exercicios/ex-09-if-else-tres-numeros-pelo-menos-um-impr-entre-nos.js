/* 🚀 Há um ímpar entre nós
8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.

Bônus: use somente um if. */

const num1 = 10;
const num2 = 4;
const num3 = 1;

if (((num1 % 2) !== 0) || ((num2 % 2) !== 0) || ((num3 % 2) !== 0)) {
    console.log('Há um ímpar entre nós');
} else {
    console.log('Não há um ímpar entre nós');
}