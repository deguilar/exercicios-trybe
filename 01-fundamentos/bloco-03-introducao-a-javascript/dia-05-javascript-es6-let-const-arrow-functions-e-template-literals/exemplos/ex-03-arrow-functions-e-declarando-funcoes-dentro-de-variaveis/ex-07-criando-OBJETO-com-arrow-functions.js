function objetoPessoa (nome, idade) {
  return {
    nome: nome,
    idade: idade,
  }
}

console.log(objetoPessoa('André', 37));

// USANDO ARROW FUNCTIONS:



const outroObjeto = (nome, idade) => ({nome: nome, idade: idade});
//temos que colocar parenteses, senão o JS acha que o que ta dentro das chaves é o corpo da função

console.log(outroObjeto('André', 37));
