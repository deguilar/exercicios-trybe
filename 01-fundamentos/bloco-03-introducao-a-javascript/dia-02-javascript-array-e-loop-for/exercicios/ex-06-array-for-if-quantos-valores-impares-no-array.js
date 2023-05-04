// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaImpares = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (((numbers[index]) % 2) !== 0) {
        somaImpares += 1;
    } 
}

if (somaImpares > 0) {
    console.log('Quantidade de números ímpares: ' + somaImpares);
} else {
    console.log('Nenhum valor ímpar encontrado');
}