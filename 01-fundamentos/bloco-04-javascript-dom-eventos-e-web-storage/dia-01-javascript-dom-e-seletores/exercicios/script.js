// 01 - Crie e execute uma função que mude o texto na tag <p>-----</p>, para uma descrição de como você se vê daqui a 2 anos.

// capturando o parágrafo OBS: Posso colocar essa linha dentro da função. Até organiza o código melhor. Mas depois não podemos usar ela de novo, porque ela vai estar dentro do escopo da função.
const future = document.querySelectorAll('.center-content p')[1];

const comoMeVejo = () => {
  return 'Trabalhando com programação';
};

future.innerText = comoMeVejo(); // retornando o return da função
// como se fosse
// future.innerText = 'Trabalhando com programação'

// OU

// const future = document.querySelectorAll('.center-content p')[1];

// const comoMeVejo = () => {
//   return future.innerText = 'Trabalhando com programação';
// };

// comoMeVejo();

// _______________________________________________________________

// 02 - Crie e execute uma função que mude a cor de fundo do elemento amarelo para rgb(76, 164, 109).
const backAmarelo = document.getElementsByClassName('main-content')[0];

const fundoAmarelo = () => {
  return 'rgb(76, 164, 109)';
};

backAmarelo.style.backgroundColor = fundoAmarelo();

// _______________________________________________________________

// 03 - Crie e execute uma função que mude a cor de fundo do elemento vermelho para branco.
const backBranco = document.querySelectorAll('.center-content')[0];

const fundoBranco = () => {
  backBranco.style.backgroundColor = 'white'; // não é preciso colocar o return nesse caso
};

fundoBranco();

// _______________________________________________________________

// 04 - Crie e execute uma função que corrija o texto da tag <h1>.
const textoH1 = document.getElementsByTagName('h1')[0];

const corrigeTexto = () => ('Desafio - JavaScript'); // função mais simplificada, pois o return só volta um comando específico, daí pode fazer assim como aprendemos no bloco anterior.

textoH1.innerText = corrigeTexto();

// _______________________________________________________________

// 05 - Crie e execute uma função que modifique o texto da primeira tag <p> para letras maiúsculas.
let capturandoPrimeiroP = document.querySelector('p');

const letraMaiuscula = () => {
  capturandoPrimeiroP.innerHTML = capturandoPrimeiroP.innerHTML.toUpperCase();
};

letraMaiuscula();

// _______________________________________________________________

/* 06 - Crie e execute uma função que exiba o conteúdo de todas as tags <p>:

Da seção principal: ou seja, com className center-content;
Os conteúdos devem ser separados por espaços. */
let pesSecao = document.getElementsByTagName('p');

let rodape = () => {
  let concatenando = '';
  for (let index = 0; index < pesSecao.length - 1; index += 1) {
    concatenando += pesSecao[index].innerText + ' ';
  }
  pesSecao[3].innerText = concatenando
}
rodape();
