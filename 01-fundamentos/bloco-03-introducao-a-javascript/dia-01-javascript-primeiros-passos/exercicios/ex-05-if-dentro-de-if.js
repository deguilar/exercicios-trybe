/* 5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.

Um ângulo será considerado inválido se não tiver um valor positivo. */

const ladoA = 90;
const ladoB = 60;
const ladoC = 30;

if (ladoA < 1 || ladoB < 1 || ladoC < 1) {
    console.log('Erro! Um dos ângulos não é positivo');
} else {
    if (ladoA + ladoB + ladoC === 180) {
        console.log('Este é um triângulo válido');
    } else {
        console.log('A soma dos dos ângulos não dao 180º, triângulo inválido');
    }
}

// OU

// const ladoA = -10;
// const ladoB = 100;
// const ladoC = 90;

// if (ladoA + ladoB + ladoC === 180) {
//     if (ladoA < 1 || ladoB < 1 || ladoC < 1) {
//         console.log('Erro! Ângulo negativo');
//     } else {
//         console.log('É um trângulo verdadeiro');
//     }
// } else {
//     console.log('Soma dos ângulos diferente de 180º');
// }