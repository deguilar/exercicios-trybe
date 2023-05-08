// 10 - Refatore a função removeCliente para diminuir sua complexidade e quebrá-la em funções menores.

/* 

let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function removeCliente(cliente) {
  if (typeof cliente === 'string') {
    let clienteEncontrado = false;
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
      if (cliente === clientesTrybeBank[index]) {
        clientesTrybeBank.splice(index, 1);
        clienteEncontrado = true;
        return 'Cliente excluída(o) com sucesso.';
      }
    }

    if (clienteEncontrado === false) {
      return 'Cliente não encontrado'
    }
  } else {
    return 'O parâmetro passado deve ser do tipo "string"!';
  }
}; 

*/
let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function eUmaString (cliente) {
    if (typeof cliente === 'string') {
        return true;
    }   else {
        return false;
    }
}

function clienteEncontrado (cliente) {
    for (let index = 0; index < clientesTrybeBank.length; index += 1) {
        if (cliente === clientesTrybeBank[index]) {
            return index;
        } 
    }
    return false;
}

function removeCliente(cliente) {
    let clienteValido = eUmaString(cliente);
    if (clienteValido === false) {
        return 'O parâmetro passado deve ser do tipo "string"!'
    }

    let qualIndex = clienteEncontrado(cliente);
    if (qualIndex === false) {
        return 'Cliente não encontrado';
    } else {

    clientesTrybeBank.splice(qualIndex, 1);
    return 'Cliente excluída(o) com sucesso.';
    }
}

console.log(removeCliente(false)); // O parâmetro passado deve ser do tipo "string"!
console.log(removeCliente('Barney')); // Cliente não encontrada(o)
console.log(removeCliente('John')); // Cliente excluída(o) com sucesso.
console.log(clientesTrybeBank); // [ 'Ada', 'Gus' ]