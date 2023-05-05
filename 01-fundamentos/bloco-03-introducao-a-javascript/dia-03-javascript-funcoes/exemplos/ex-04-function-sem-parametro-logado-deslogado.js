// 4 - É possível não passar nenhum valor como parâmetro? Sim. Algumas funções não necessitam de parâmetros. Por exemplo, é possível criar uma função que verifica se um usuário está logado ou deslogado no sistema do TrybeBank.

let status1 = 'deslogado'; // o status padrão é deslogado

function logarDeslogar() { // aqui criamos uma função para verificar o status
  if (status1 === 'deslogado') { // se a pessoa usuária estiver deslogada, alteramos o status para logado
    status1 = 'logado';
  } else { // caso esteja logado, alteramos para deslogado
    status1 = 'deslogado';
  }
}

console.log(status1); // deslogado

logarDeslogar();
console.log(status1); // logado

logarDeslogar();
console.log(status1); // deslogado

console.log('O usuário está ' + status1 + ' no sistema TrybeBank'); // O usuário está deslogado no sistema TrybeBank