// 3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let num1 = 12;
let num2 = 15;
let num3 = 17;

if (num1 > num2 && num1 > num3) {
    console.log('O maior número dos três é: ' + num1);
} else if (num2 > num1 && num2 > num3) {
    console.log('O maior número dos três é: ' + num2);
} else if (num3 > num1 && num3 > num2) {
    console.log('O maior número dos três é: ' + num3);
}