function contaPalavras (frase) {
  return frase.split(' ').length; //vai contar quantas palavras temos
}

console.log(contaPalavras('Fala Trybo, belza?'));



//USANDO ARROW FUNCTIONS:
const contaNumeroPalavras = frase => frase.split(' ').length;

console.log(contaNumeroPalavras('Eu moro em Belo Horizonte'));
