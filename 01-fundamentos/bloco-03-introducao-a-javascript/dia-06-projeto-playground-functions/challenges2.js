// Desafio 11 - Crie a função generatePhoneNumber
const condicoes = (array) => {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index of array) {
    if (index > 9 || index < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return false;
};

// eslint-disable-next-line complexity
const quantidadeRepetidos = (array) => {
  let armazena = 0;
  for (let index = 0; index < array.length; index += 1) {
    let numeroRepetido = 0;
    for (let index2 = 0; index2 < array.length; index2 += 1) {
      if (array[index] === array[index2]) {
        numeroRepetido += 1;
      }
    }
    if (numeroRepetido > armazena) {
      armazena = numeroRepetido;
    }
  }
  // console.log(armazena);
  if (armazena >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return false;
};

// eslint-disable-next-line max-lines-per-function
const generatePhoneNumber = (array) => {
  if (condicoes(array) !== false) {
    return condicoes(array);
  }
  if (quantidadeRepetidos(array) !== false) {
    return quantidadeRepetidos(array);
  }
  let parte1 = array.slice(0, 2); // vai pegar o indice 0 e cortar do 2 em diante
  parte1 = parte1.join(); // tira o array, mas coloca vírgula entre os caracteres
  parte1 = parte1.replaceAll(',', ''); // tira a vírgula e deixa sem espaço entre os caracteres
  // console.log(parte1);

  let parte2 = array.slice(2, 7);
  parte2 = parte2.join();
  parte2 = parte2.replaceAll(',', '');
  // console.log(parte2);

  let parte3 = array.slice(-4); // vai pegar os 4 últimos caracteres;
  parte3 = parte3.join();
  parte3 = parte3.replaceAll(',', '');
  // console.log(parte3);

  return `(${parte1}) ${parte2}-${parte3}`;
};

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12 -  Crie a função triangleCheck
const checkSomaDasMedidas = (lineA, lineB, lineC) => {
  if ((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineA + lineB)) {
    return true;
  }
  return false;
};

const checkValorAbsoluto = (lineA, lineB, lineC) => {
  if ((lineA > Math.abs(lineB - lineC)) && (lineB > Math.abs(lineA - lineC)) && (lineC > Math.abs(lineA - lineB))) {
    return true;
  }
  return false;
};

const triangleCheck = (lineA, lineB, lineC) => {
  if (checkSomaDasMedidas(lineA, lineB, lineC) && checkValorAbsoluto(lineA, lineB, lineC)) {
    return true;
  }
  return false;
};

console.log(triangleCheck(10, 14, 8));

// Desafio 13 - Crie a função hydrate
//Cógigo analisando o código de colegas...

const hydrate = (phrase) => {
  let reg = /\d+/g;
  let nsFromPhrase = phrase.match(reg);
  let copos = 0;
  console.log(nsFromPhrase);
  for (let numbers of nsFromPhrase){
    copos += parseInt(numbers);
  };

  if (copos === 1) {
    return '1 copo de água';
  }
  return `${copos} copos de água`;
};

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
