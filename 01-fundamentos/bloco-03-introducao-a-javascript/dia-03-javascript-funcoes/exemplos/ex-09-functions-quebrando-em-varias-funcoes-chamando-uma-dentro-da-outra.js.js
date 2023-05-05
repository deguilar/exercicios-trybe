// function sacar(valor, saldo) {
//     let diferenca = saldo - valor;
//     if (valor > 1 && saldo >= 0) {
//         if (valor <= saldo) {
//             return 'Seu novo saldo é de: R$ ' + diferenca + ',00'
//         } else {
//             return 'Saldo insuficiente. Seu saldo atual é de: R$ ' + saldo + ',00'
//         }
//     } else {
//         return 'Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0'
//     }
// }

// console.log(sacar(200, 1000));

//QUEBRANDO O PROBLEMA EM VÁRIAS FUNÇÕES____________________________

function verificaValores (valor, saldo) {
    if (valor >= 1 || saldo >= 0) {
        return true;
    } else {
        return false;
    }
}

function verificaSaldo (valor, saldo) {
    if (valor <= saldo) {
        return true;
    } else {
        return false;
    }
}

function sacar (valor, saldo) {

    if (verificaValores(valor,saldo) === false) {
        return 'Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e o saldo deve ser maior ou igual a 0.'
    }

    if (verificaSaldo(valor, saldo) === true) {
        return 'Saque realizado com sucesso. Novo saldo: R$ ' + (saldo - valor) + ',00'
    } else {
        return 'Saldo insuficiente. Seu saldo atual é: R$ ' + saldo + ',00'
    }
}

console.log(sacar(800, 1000));