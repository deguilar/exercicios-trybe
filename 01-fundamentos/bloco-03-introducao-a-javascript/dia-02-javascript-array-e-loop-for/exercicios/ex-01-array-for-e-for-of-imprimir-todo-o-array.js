// 1 - Percorra o array imprimindo todos os valores contidos nele com a função console.log().

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
}


// USANDO O FOR-OF

let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let index of numbers2) {
    console.log(index);
}