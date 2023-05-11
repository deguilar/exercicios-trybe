let pessoa = {
  nome: 'André',
  sobrenome: 'Aguilar',
  anoNascimento: 1985,
};

function meuObjeto (objeto) {
  console.log(`Paciente: ${pessoa.nome} ${pessoa.sobrenome}
Idade: ${2023 - pessoa.anoNascimento} anos.`); 
}

meuObjeto(pessoa);

console.log(`Paciente: ${pessoa.nome} ${pessoa.sobrenome}
Idade: ${2023 - pessoa.anoNascimento} anos.`);