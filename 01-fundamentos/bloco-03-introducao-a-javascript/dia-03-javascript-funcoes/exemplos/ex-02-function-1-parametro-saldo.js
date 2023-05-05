/* Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

Adicione um valor ao saldo.
Subtraia um valor do saldo.
Multiplique o valor do saldo por uma taxa.
Divida o valor do saldo. */

let saldo = 1000;

function adicionaValor (valor) {
    return saldo + valor;
}

function retiraValor(valor) {
    return saldo - valor;
}

function multiplicaValor(valor) {
    return saldo * valor;
}

function divideValor(valor) {
    return saldo / valor;
}

console.log(adicionaValor(500));
console.log(retiraValor(800));
console.log(multiplicaValor(2));
console.log((divideValor(4)));