
// 1 - Crie a função ligarDesligar, que ligue e desligue um motor de um carro.
let ligarDesligar = (motor) => {
  let carro = motor === 'ligado' ? 'desligado' : 'ligado';
  console.log(`O motor está ${carro}`);
  return carro;
};

console.log(ligarDesligar('ligado'));


//______________________________________________________


// 2 - Crie a função circleArea, que calcule a área de um círculo.
let circleArea = (raio) => {
  const valorPi = 3.14;
  const areaDoCirculo = (valorPi * (raio ** 2));
  if (typeof raio === 'string') {
    return 'O parâmetro radius deve ser um número';
  }
  return `Essa é a área do círculo: ${areaDoCirculo}`;
};

console.log(circleArea(10));
console.log(circleArea(5));
console.log(circleArea('duna'));


//______________________________________________________


// 3 - Crie a função longestWord, que receba uma frase como parâmetro e retorne a maior palavra da frase.
const splitando = (frase) => {
  let tornandoArray = frase.split(' ');
  return (tornandoArray);
};
const longestWord = (frase) => {
  let maiorPalavra = splitando(frase)[0];
  for (let index = 1; index < splitando(frase).length; index += 1) {
    if (splitando(frase)[index].length > maiorPalavra.length) {
      maiorPalavra = splitando(frase)[index];
    }
  }
  return maiorPalavra;
};

console.log(longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu'));
console.log(longestWord('Eu estudo na Trybe com muita dedicação'));


//OU


const longestWord2 = (phrase) => {
  const arrayPhrase = phrase.split(' ');
  let longest = '';
  for (const value of arrayPhrase) {
    if (value.length > longest.length) {
      longest = value;
    }
  }
  return longest;
};

console.log(longestWord2('Antônio foi ao banheiro e não sabemos o que aconteceu'));
console.log(longestWord2('Eu estudo na Trybe com muita dedicação'));