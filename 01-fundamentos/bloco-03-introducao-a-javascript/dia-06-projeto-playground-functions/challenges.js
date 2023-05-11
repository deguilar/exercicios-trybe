// Desafio 1 - Crie a função compareTrue
const girafa = true;
const elefante = true;
const macaco = false;

const compareTrue = (param1, param2) => {
  if (param1 && param2) {
    return true;
  }
  return false;
};

console.log(compareTrue(girafa, elefante));
console.log(compareTrue(elefante, macaco));

// Desafio 2 - Crie a função splitSentence
const splitSentence = (string) => (string.split(' '));

const frase1 = 'go trybe';
const frase2 = 'vamo que vamo';
const frase3 = 'foguete';

console.log(splitSentence(frase1));
console.log(splitSentence(frase2));
console.log(splitSentence(frase3));

// Desafio 3 - Crie a função concatName
const array1 = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
const array2 = ['foguete', 'não', 'tem', 'ré'];
const array3 = ['captain', 'my', 'captain'];

const concatName = (meuArray) => `${meuArray[meuArray.length - 1]}, ${meuArray[0]}`;

console.log(concatName(array1));
console.log(concatName(array2));
console.log(concatName(array3));

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => {
  const vitorias = wins * 3;
  return vitorias + ties;
};

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));
// Desafio 5 - Crie a função highestCount
const primeiroArray = [9, 1, 2, 3, 9, 5, 7];
const segundoArray = [0, 4, 4, 4, 9, 2, 1];
const terceiroArray = [0, 0, 0];

const maiorNumero = (array) => {
  let meuMaiorNumero = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > meuMaiorNumero) {
      meuMaiorNumero = array[index];
    }
  }
  return meuMaiorNumero;
};

// console.log(maiorNumero(primeiroArray));
// console.log(maiorNumero(segundoArray));
// console.log(maiorNumero(terceiroArray));

const highestCount = (array) => {
  let quantidadeVezes = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (maiorNumero(array) === array[index]) {
      quantidadeVezes += 1;
    }
  }
  return quantidadeVezes;
};

console.log(highestCount(primeiroArray));
console.log(highestCount(segundoArray));
console.log(highestCount(terceiroArray));

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => ((base * height) / 2);

const calcRectangleArea = (base, height) => (base * height);

const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  }
  if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  return 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
};

console.log(calcTriangleArea(10, 50));
console.log(calcRectangleArea(10, 50));
console.log(calcAllAreas(10, 50, 'retângulo'));

// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  }
};
// Math.abs vai pegar o módulo do resultado, pois no quarto caso, se não fosse módulo, o resultado seria: cat1
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(0, 8, 8));
console.log(catAndMouse(1, 0, 2));

// Desafio 8 - Crie a função fizzBuzz
const firstArray = [2, 15, 7, 9, 45];
const secondArray = [7, 9];
const thirdArray = [9, 25];

const fizzBuzz = (array) => {
  let novoArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (((array[index] % 3) === 0) && ((array[index] % 5) === 0)) {
      novoArray.push('fizzBuzz');
    } else if ((array[index] % 3) === 0) {
      novoArray.push('fizz');
    } else if ((array[index] % 5) === 0) {
      novoArray.push('buzz');
    } else {
      novoArray.push('bug!');
    }
  }
  return novoArray;
};

// OU___________________________________

// const fizzBuzz = (array) => {
//   let answer = [];
//   for (let number of array){
//     if (number % 15 == 0) {
//       answer.push('fizzBuzz');
//     } else if (number % 3 == 0) {
//       answer.push('fizz');
//     } else if (number % 5 == 0) {
//       answer.push('buzz');
//     } else {
//       answer.push('bug!');
//     }
//   }
//   return answer;
// };

console.log(fizzBuzz(firstArray));
console.log(fizzBuzz(secondArray));
console.log(fizzBuzz(thirdArray));

// Desafio 9 - Crie a função encode e a função decode
// const encode = (string) => {
//   let sA = string.replaceAll('a', '1');
//   let sE = sA.replaceAll('e', '2');
//   let sI = sE.replaceAll('i', '3');
//   let sO = sI.replaceAll('o', '4');
//   let sU = sO.replaceAll('u', '5');
//   return sU;
// };

// const decode = (string) => {
//   let s1 = string.replaceAll('1', 'a');
//   let s2 = s1.replaceAll('2', 'e');
//   let s3 = s2.replaceAll('3', 'i');
//   let s4 = s3.replaceAll('4', 'o');
//   let s5 = s4.replaceAll('5', 'u');
//   return s5;
// };

// console.log(encode('hi there!'));
const trocaVogais = (minhaLetra) => {
  if (minhaLetra === 'a') {
    minhaLetra = 1;
  }
  if (minhaLetra === 'e') {
    minhaLetra = 2;
  }
  if (minhaLetra === 'i') {
    minhaLetra = 3;
  }
  if (minhaLetra === 'o') {
    minhaLetra = 4;
  }
  if (minhaLetra === 'u') {
    minhaLetra = 5;
  }
  return minhaLetra;
};

const trocaNumeros = (minhaLetra) => {
  if (minhaLetra === '1') {
    minhaLetra = 'a';
  }
  if (minhaLetra === '2') {
    minhaLetra = 'e';
  }
  if (minhaLetra === '3') {
    minhaLetra = 'i';
  }
  if (minhaLetra === '4') {
    minhaLetra = 'o';
  }
  if (minhaLetra === '5') {
    minhaLetra = 'u';
  }
  return minhaLetra;
};

function encode(string) {
  let letrasSetenca = string.split('');
  let encodando = '';
  for (let index = 0; index < letrasSetenca.length; index += 1) {
    let letra = trocaVogais(letrasSetenca[index]); // ((letrasSetenca[index])) é o parâmetro da função trocaVogais
    encodando += letra;
  }
  return encodando;
}

function decode (string) {
  let transformandoEmArray = string.split('');
  let novaFrase = '';
  for (let index = 0; index < transformandoEmArray.length; index += 1) {
    let letra = trocaNumeros(transformandoEmArray[index]);
    novaFrase += letra;
  }
  return novaFrase;
}

console.log(encode('hi there!'));
console.log(decode('h3 th2r2!'));


// Desafio 10 - Crie a função techList
// function techList(array, string) {
//   let meuArrayObjetos = [];
//   array.sort();
//   console.log(array);

//   for (let index = 0; index < array.length; index += 1) {
//     meuArrayObjetos.push({});
//     meuArrayObjetos[index].tech = array[index];
//     meuArrayObjetos[index].name = string;
//   }
//   return meuArrayObjetos;
// }

// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

function techList (array, string) {
  let ordemAlfabetica = array.sort();
  let resposta = [];
  if (ordemAlfabetica.length === 0) {
    return resposta;
  }
  for (let index of ordemAlfabetica) {
    let objetoPush = {
      tech: index,
      name: string,
    };
    resposta.push(objetoPush);
  }
  return resposta;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
console.log(techList([], 'Lucas'));

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
