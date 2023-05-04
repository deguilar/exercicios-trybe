// let primeiroNumeroSorteado = Math.ceil(Math.random() * 60);
// let segundoNumeroSorteado = Math.ceil(Math.random() * 60);
// let terceiroNumeroSorteado = Math.ceil(Math.random() * 60);
// let quartoNumeroSorteado = Math.ceil(Math.random() * 60);
// let quintoNumeroSorteado = Math.ceil(Math.random() * 60);
// let sextoNumeroSorteado = Math.ceil(Math.random() * 60);

// let numerosSorteados = [primeiroNumeroSorteado, segundoNumeroSorteado, terceiroNumeroSorteado, quartoNumeroSorteado, quintoNumeroSorteado, sextoNumeroSorteado];

// OU__________________________________________________________

let numerosSorteados = [];

for (let index = 0; index < 6; index += 1) {
    numerosSorteados.push(Math.ceil(Math.random() * 60))
}

console.log('Os números sorteados foram: ' + numerosSorteados);

let jogoAndre = [12, 14, 28, 57, 60, 16];
let jogoKaio = [10, 15, 24, 38, 44, 59];

let numeroAcertos = 0;

for (let indexMega = 0; indexMega < numerosSorteados.length; indexMega += 1) {
    for (let indexJogo = 0; indexJogo < jogoAndre.length; indexJogo += 1) {
        if (numerosSorteados[indexMega] === jogoAndre[indexJogo]) {
            numeroAcertos += 1;
        }
    }
}

console.log('Jogo da mega, André, foram: ' + jogoAndre);
console.log('O total de acertos foi de: ' + numeroAcertos + ' números');

numeroAcertos = 0;

for (let indexMega = 0; indexMega < numerosSorteados.length; indexMega += 1) {
    for (let indexJogo = 0; indexJogo < jogoKaio.length; indexJogo += 1) {
        if (numerosSorteados[indexMega] === jogoKaio[indexJogo]) {
            numeroAcertos += 1;
        }
    }
}

console.log('Jogo da mega, Kaio, foram: ' + jogoKaio);
console.log('O total de acertos foi de: ' + numeroAcertos + ' números');