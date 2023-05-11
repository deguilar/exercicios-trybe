let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1 - Crie uma função para adicionar o turno da noite na lesson2. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.
function adicaoLesson2 (objeto, chave, valor) {
  return objeto[chave] = valor;
}

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listaAsChaves (objeto) {
  let adicionaChaves = Object.keys(objeto);
  return adicionaChaves;
}

// 3 - Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
function tamanhoDoObjeto (objeto) {
  let tamanho = Object.keys(objeto).length;
  return tamanho;
}
// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
function valoresDoObjeto (objeto) {
  let retornaValores = (Object.values(objeto));
  return retornaValores;
}

console.log(tamanhoDoObjeto(lesson2));
console.log(listaAsChaves(lesson2));
console.log( valoresDoObjeto(lesson2));
console.log(adicaoLesson2(lesson2, 'turno', 'noite'));
console.log(lesson2);

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas por meio do Object.assign. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas lesson1, lesson2 e lesson3. 

let allLessons = Object.assign({},
  {
    lesson1: lesson2,
    lesson2: lesson2,
    lesson3: lesson3,
  }
);

console.log(allLessons);




function getNumberOfStudentsMath(obj) {
  let total = 0;
  let keys = Object.keys(obj);
  for (index in keys) {
    if(obj[keys[index]].materia === 'Matemática'){
      total += obj[keys[index]].numeroEstudantes;
    }
  }
  return total;
}
console.log(getNumberOfStudentsMath(allLessons));

