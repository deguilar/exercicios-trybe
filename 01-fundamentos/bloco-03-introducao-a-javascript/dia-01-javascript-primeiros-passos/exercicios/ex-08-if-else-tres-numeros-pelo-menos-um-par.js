/* 🚀 Há um par entre nós
8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.

Bônus: use somente um if. */

const num1 = 1;
const num2 = 3;
const num3 = 2;

if (((num1 % 2) === 0) || ((num2 % 2) === 0) || ((num3 % 2) === 0)) {
    console.log('Há um par entre nós');
} else {
    console.log('Não há um par entre nós');
}