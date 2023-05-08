let conta = {
  agencia: '4040',
  banco: {
    cod: '012',
    id: 4,
    nome: 'Itaú',
  },
};

let infoBanco = 'banco';
console.log(conta[infoBanco]);
// OU
// console.log(conta['banco']);
// OU
// let infoBanco = conta['banco'];
// console.log(infoBanco);

console.log(conta[infoBanco]['nome']);
// OU
// console.log(conta['banco']['nome']);
// OU
// console.log(conta.banco.nome);

console.log(conta.agencia);
console.log(conta['agencia']);

console.log(conta.banco.cod);
console.log(conta['banco']['cod']);

console.log(conta['banco']['id']);