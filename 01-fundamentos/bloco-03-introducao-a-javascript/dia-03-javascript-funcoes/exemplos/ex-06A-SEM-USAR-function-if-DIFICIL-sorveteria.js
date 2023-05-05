let clientesCadastrados = ['Marta', 'Paulo', 'Alexandre', 'Ester'];
let sorvetesCadastrados = ['morango', 'chocolate', 'flocos'];

let clienteValido = false
let sorveteValido = false

//MARTA
for (index = 0; index < clientesCadastrados.length; index += 1) {
    if (clientesCadastrados[index] === 'Marta') {
        clienteValido = true;
    } else {}
}

for (index = 0; index < sorvetesCadastrados.length; index += 1) {
    if (sorvetesCadastrados[index] === 'chocolate') {
        sorveteValido = true;
    }
}

if (clienteValido === true && sorveteValido === true) {
// OU (clienteValido && sorveteValido)
    console.log('Marta, pague seu sorvete de chocolate no caixa');
} else {
    console.log('Cliente e/ou sorvete não cadastrado(s)');
}
//___________________________________________________________
//PAULO

clienteValido = false;
sorveteValido = false;

for (index = 0; index < clientesCadastrados.length; index += 1) {
    if (clientesCadastrados[index] === 'Paulo') {
        clienteValido = true;
    } else {}
}

for (index = 0; index < sorvetesCadastrados.length; index += 1) {
    if (sorvetesCadastrados[index] === 'flocos') {
        sorveteValido = true;
    }
}

if (clienteValido === true && sorveteValido === true) {
// OU (clienteValido && sorveteValido)
    console.log('Paulo, pague seu sorvete de flocos no caixa');
} else {
    console.log('Cliente e/ou sorvete não cadastrado(s)');
}
//____________________________________________________________

//ASSIM TERÍAMOS QUE FAZER REPETIÇÕES DE CÓDIGOS PARA CADA PESSOA, POR ISSO USAMOS FUNÇÕES