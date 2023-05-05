// Agora iremos escrever um programa que irá excluir um(a) cliente já existente do array de clientes do TrybeBank. Certifique-se de que a função deve receber um parâmetro do tipo string e imprimir uma mensagem de erro, caso o parâmetro não seja do tipo string e caso o(a) cliente não exista dentro do array.

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function excluiCliente (nome) {
    if (typeof nome === 'string') {    
        let clienteEncontrado = false;
        for (index = 0; index < clientesTrybeBank.length; index += 1) {
            if (nome === clientesTrybeBank[index]) {
                clientesTrybeBank.splice(index,1);
                clienteEncontrado = true;
                return 'Cliente excluído com sucesso';
            }
            
        }

        if (clienteEncontrado === false) {
            return 'Cliente não encontrado';
        }

    } else {
        return 'O parâmetro passado deve ser uma string!';
    }
}

console.log(excluiCliente('Gus'));
console.log(excluiCliente(5));
console.log(excluiCliente('Kaio'));
console.log(clientesTrybeBank);