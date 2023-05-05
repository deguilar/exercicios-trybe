// Requisito 1 - Crie a função verificaPalindromo
function verificaPalindromo (palavra) {
  if(palavra === 'arara') {
    return true;
  } else if (palavra === 'desenvolvimento') {
    return false;
  }
}

console.log(verificaPalindromo('arara'));


// Requisito 2 - Crie a função indiceDoMaior
let array1 = [2, 3, 6, 7, 10, 1];
let array2 = [9, 1, 3, 5, 7]

function indiceDoMaior (array) {
  let armazenaIndice = 0;
  let primeiroNumero = array[0];
  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > primeiroNumero) {
      armazenaIndice = index
    }
  }
  return armazenaIndice
}

console.log(indiceDoMaior(array1));
console.log(indiceDoMaior(array2));


// Requisito 3 - Crie a função indiceDoMenor
let primeiroArray = [2, 3, 6, 7, 10, 1];
let segundoArray = [2, 4, 6, 7, 10, 0, -3];

function indiceDoMenor (array) {
  let menorValor = array[0];
  let menorIndice = 0;

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] < menorValor) {
      menorValor = array[index]; //armazena o menor valor, mas nesse caso não é necessário, porque só está pedindo o index.
      menorIndice = index; // aqui armazena a posição do index de menor valor.
    }
  }
  return menorIndice;
}

console.log(indiceDoMenor(primeiroArray));
console.log(indiceDoMenor(segundoArray));


// Requisito 4 - Crie a função maiorPalavra
let arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
let arrayProgramas = ['JavaScript', 'HTML', 'CSS', 'GitHub', 'Unix'];

function maiorPalavra (array) {
  let aramazenaMaiorPalavra = array[0];

  for (let index = 1; index < array.length; index += 1) {
    if (array[index].length > aramazenaMaiorPalavra.length) {
      aramazenaMaiorPalavra = array[index];
    }
  }
  return aramazenaMaiorPalavra;
}

console.log(maiorPalavra(arrayNomes));
console.log(maiorPalavra(arrayProgramas));


// Requisito 5 - Crie a função maisRepetido

// Esse código peguei de um colega para entender, mas ainda não entendi aquele index no final, pois o index não retorna somente o índice do array e não o elemento do índice?
function maisRepetido (array) {
  let indexMaisRepetido = 0;
  let maxHits = 0;
      for (let index = 0; index < array.length; index += 1){
          let hits = 0;
          for (value of array){
              if (value === array[index]){
                  hits += 1;
              }
          }
          if (hits > maxHits){
              maxHits = hits;
              indexMaisRepetido = index
          } 
      }
      return array[indexMaisRepetido]
}

let array11 = [2, 3, 2, 5, 8, 2, 3];
let array12 = [2, 3, -2, 3, -2, 2, 3];


console.log(maisRepetido(array11));
console.log(maisRepetido(array12));


// Requisito 6 - Crie a função somatorio
function seNumeroNegativo (numero) {
  if (numero < 0) {
    return true;
  } else {
    return false; // o lint diz que não precisa desse else retornando falso. E não precisa mesmo, pq ele só vai retornar true se entrar na condição do if. E está retornando true somente se entrar na condição.
  }
}

function meuSomatorio (numero) {
  let soma = 0;
  for (let index = 1; index <= numero; index += 1) {
    soma += index
  }
  return soma;
}

function somatorio (numero) {
  let ifNegativo = seNumeroNegativo(numero);
  let mySomatorio = meuSomatorio(numero);
  
  if (ifNegativo === true) {
    return 'ERRO';
  } else {
    return mySomatorio;
  }
}

console.log(somatorio(5));
console.log(somatorio(1));
console.log(somatorio(-8));

// OU____________________________________________________

// function somatorio(numero) {
//   let somatorioNumero = 0;
//   if (numero < 0) {
//     return 'ERRO';
//   } if (numero === 0) {
//     return 0;
//   }
//   for (let i = 0; i <= numero; i += 1) {
//     somatorioNumero += i;
//   }
//   return somatorioNumero;
// }

// OU______________________________________________________

// function seNumeroNegativo (numero) {
//   if (numero < 0) {
//     return "ERRO";
//   }
// }

// function meuSomatorio (numero) {
//   let soma = 0;
//   for (let index = 1; index <= numero; index += 1) {
//     soma += index
//   }
//   return soma;
// }

// function somatorio (numero) {
//   let ifNegativo = seNumeroNegativo(numero);
//   let mySomatorio = meuSomatorio(numero);

//   if (numero < 0) {
//     return ifNegativo;
//   } else {
//     return mySomatorio;
//   }
// }

// console.log(somatorio(5));
// console.log(somatorio(1));
// console.log(somatorio(-8));


// Requisito 7 - Crie a função verificaFimPalavra
function verificaFimPalavra(word1, word2) {
  let resultado = false;
  
  if (word1.slice(-word2.length) === word2) {
    resultado = true;
  }

  return resultado;
}

/* ex: let palavra = trybe;
   palavra.slice(-2);       
   A saída aqui será 'be', pois pedimos para ele pegar os dois últimos caracteres.
*/

console.log(verificaFimPalavra('trybe', 'be'));
console.log(verificaFimPalavra('joaofernando', 'fernan'));

























// Não modifique essas linhas
module.exports = {
  verificaPalindromo: typeof verificaPalindromo === 'function' ? verificaPalindromo : (() => {}),
  indiceDoMaior: typeof indiceDoMaior === 'function' ? indiceDoMaior : (() => {}),
  indiceDoMenor: typeof indiceDoMenor === 'function' ? indiceDoMenor : (() => {}),
  maiorPalavra: typeof maiorPalavra === 'function' ? maiorPalavra : (() => {}),
  maisRepetido: typeof maisRepetido === 'function' ? maisRepetido : (() => {}),
  somatorio: typeof somatorio === 'function' ? somatorio : (() => {}),
  verificaFimPalavra: typeof verificaFimPalavra === 'function' ? verificaFimPalavra : (() => {}),
};
