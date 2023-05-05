let clientesCadastrados = ['Marta', 'Paulo', 'Alexandre', 'Ester'];
let sorvetesCadastrados = ['morango', 'chocolate', 'flocos'];

function temNoCadastro (nome, sorvete) {

    let clienteValido = false;
    let sorveteValido = false;

    for (index = 0; index < clientesCadastrados.length; index += 1) {
        if (clientesCadastrados[index] === nome) {
            clienteValido = true;
        }
    }

    for (index = 0; index < sorvetesCadastrados.length; index += 1) {
        if (sorvetesCadastrados[index] === sorvete) {
            sorveteValido = true
        }
    }

    if (clienteValido === true && sorveteValido === true) {
        return nome + ', pague seu sorvete de ' + sorvete + ' no caixa';
    } else {
        return 'Cliente e/ou sorvete não cadastrado(s)'
    }
}

console.log(temNoCadastro('Marta', 'flocos'));
console.log(temNoCadastro('Alexandre', 'morango'));
console.log(temNoCadastro('Paulo', 'maracujá'));