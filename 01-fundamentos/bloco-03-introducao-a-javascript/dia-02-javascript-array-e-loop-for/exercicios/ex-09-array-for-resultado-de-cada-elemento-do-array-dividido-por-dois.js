// 9 - Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

let numeros = [];

for (let index = 1; index <= 25; index += 1) {
    numeros.push(index);
}

let numerosDividios = [];

for (let index = 0; index < numeros.length; index += 1) {
    console.log(numeros[index] / 2);
}


// OU_____________________________________________________

// let numeros = [];

// for (let index = 1; index <= 25; index += 1) {
//     numeros.push(index / 2);
// }

// console.log(numeros);



