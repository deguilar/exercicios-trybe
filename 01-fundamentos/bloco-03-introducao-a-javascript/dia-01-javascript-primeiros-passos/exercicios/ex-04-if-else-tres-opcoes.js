// 4 - Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne: “positive”, se esse valor for positivo; “negative”, se esse valor for negativo, e “zero”, caso esse valor não seja nem positivo nem negativo.

let numero = 22;

if (numero > 0) {
    console.log(numero + ' é positivo');
} else if (numero < 0) {
    console.log(numero + ' é negativo');
} else {
    console.log(numero);
}