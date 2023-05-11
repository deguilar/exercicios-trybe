//Além disso, pode-se omitir os parênteses apenas em um cenário: quando a função recebe somente um argumento, como no exemplo a seguir.

const multiplyByTwo = (number) => number * 2;
console.log(multiplyByTwo(10));

const multiplyByFour = number => number * 4;
console.log(multiplyByFour(10));


//Em funções que recebem mais de um parâmetro, os parênteses não são omitidos.

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));