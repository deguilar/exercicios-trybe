/* 1 - Crie uma variável chamada “weekDay” que receba a string “quarta-feira”.

Utilizando if/else, implemente as seguintes condicionais:

Se a variável “weekDay” for “segunda-feira”, “terça-feira”, “quarta-feira”, “quinta-feira” ou “sexta-feira”, imprima “Oba, mais um dia de aprendizado na Trybe >:D”.

Se a variável for algum dia de fim de semana, imprima “FINALMENTE, descanso merecido! UwU!”.

Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo. Esse assunto é muito importante para seu aprendizado! */

const weekDay = 'quarta-feira';
let message = '';

if (weekDay === 'segunda-feira' || weekDay === 'terca-feira' || weekDay === 'quarta-feira' || weekDay === 'quinta-feira' || weekDay === 'sexta-feira') {
    message = 'Oba, mais um dia de aprendizado na Trybe >:D';
} else {
    message = 'FINALMENTE, descanso merecido! UwU!';
}

console.log(message);