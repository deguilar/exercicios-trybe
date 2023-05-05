let clientesCadastrados = ['Marta', 'Paulo', 'Alexandre', 'Ester'];
let sorvetesCadastrados = ['morango', 'chocolate', 'flocos'];

function temNoCadastro (nome, sorvete) {
    if (clientesCadastrados.includes(nome) && sorvetesCadastrados.includes(sorvete)) {
        return nome + ', pague seu sorvete de ' + sorvete + ' no caixa';
    } else {
        return 'Cliente e/ou sorvete não cadastrado(s)'
    }
}

console.log(temNoCadastro('Marta', 'flocos'));
console.log(temNoCadastro('Paulo', 'chocolate'));
console.log(temNoCadastro('Kaio', 'flocos'));
console.log(temNoCadastro('André', 'banana'));
