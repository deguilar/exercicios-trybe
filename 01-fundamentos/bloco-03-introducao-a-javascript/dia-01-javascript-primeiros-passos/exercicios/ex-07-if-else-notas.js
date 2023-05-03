/* 7 - Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga as seguintes regras:

Porcentagem >= 90 -> A

Porcentagem >= 80 -> B

Porcentagem >= 70 -> C

Porcentagem >= 60 -> D

Porcentagem >= 50 -> E

Porcentagem < 50 -> F

O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

const nota = 80;
let mensagem = '';

if (nota > 100 || nota < 0) {
    mensagem = 'Erro, nota inválida';
} else {
    if (nota >= 90) {
        mensagem = 'A';
    } else if (nota >= 80) {
        mensagem = 'B';
    } else if (nota >= 70) {
        mensagem = 'C';
    } else if (nota >= 60) {
        mensagem = 'D';
    } else if (nota >= 50) {
        mensagem = 'E';
    } else {
        mensagem = 'F';
    }
}

console.log(mensagem);