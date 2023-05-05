// 5 - Também, é possível passar múltiplos parâmetros para uma função. Imagine que um(a) cliente do TrybeBank deseja fazer um saque de sua conta. Para isso, vai ser preciso verificar se o valor a ser sacado é maior ou igual ao saldo.

function sacar(valor, saldo) {
    let diferenca = saldo - valor;
    if (valor > 1 && saldo >= 0) {
        if (valor <= saldo) {
            return 'Seu novo saldo é de: R$ ' + diferenca + ',00'
        } else {
            return 'Saldo insuficiente. Seu saldo atual é de: R$ ' + saldo + ',00'
        }
    } else {
        return 'Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0'
    }
}

console.log(sacar(-200, 1000));

//A função acima verifica se o valor e o saldo passados como parâmetros são valores válidos. Se forem, ela verifica se o valor passado é menor ou igual ao saldo. Se for, então o saque é realizado e o novo saldo é retornado. Se não for, é retornada uma mensagem de saldo insuficiente e com o saldo atual.