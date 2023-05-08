// Tente criar uma função que exiba as habilidades do objeto student. Nesse caso, cada habilidade deve ser exibida no formato “Nome da habilidade, Nível: valor da chave referente à habilidade”. Após desenvolver a função, observe a sugestão de resposta a seguir e compare-a com sua solução.

let student1 = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskills: 'Ótimo',
};

let student2 = {
  html: 'Bom',
  css: 'Ótimo',
  javascript: 'Ruim',
  softskills: 'Ótimo',
  git: 'Bom', // chave adicionada
};


function skills(student) {
  let arrayDeHabilidades = Object.keys(student);

  for (let index in arrayDeHabilidades) {
    console.log(arrayDeHabilidades[index] + ' Nível: ' + student[Object.keys(student)[index]]); // OU student[arrayDeHabilidades[index]
  }
};

console.log('Estudante 1');
skills(student1);

console.log('--------------');

console.log('Estudante 2');
skills(student2);

console.log();