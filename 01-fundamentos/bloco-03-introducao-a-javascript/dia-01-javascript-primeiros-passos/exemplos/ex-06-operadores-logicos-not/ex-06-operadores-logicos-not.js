/*Operador NOT
Vamos ver um exemplo do que o operador NOT (ou !, no JavaScript) faz. Você consegue prever o que esse código vai imprimir?*/


console.log((2 + 2) === 4);
// Esse código deve retornar true, não é? Afinal, 2 + 2 resultar em 4 é uma declaração verdadeira. E se adicionarmos o operador NOT antes dessa declaração?


console.log(!(2 + 2) === 4);
// Se você executar esse código, vai perceber que o valor impresso é o oposto do anterior. 🤔

// Estamos diante de um operador muito poderoso. Ele pode inverter o valor booleano de um elemento. Isso mesmo! Se tivermos uma variável ou um valor considerado true, podemos gerar o resultado oposto simplesmente fazendo !variável, ou seja, false.

// Então, sabendo que o resultado original da operação é true, quando é inserido o operador NOT antes dela, obtemos o valor contrário à resposta final, que é false.

// O conceito de truthy e falsy também se aplica aqui, por isso não estamos limitados apenas aos tipos primitivos booleanos. Podemos usar em:

//Strings
let squirtle = "melhor pokemon inicial";

console.log(!squirtle); // false

//Números
console.log(!42); // false

console.log(!0); // true
// O número 0 tem o valor "falsy" no JavaScript. Logo, seu oposto é true.

//Valores nulos
console.log(!null); // true

//Valores indefinidos
console.log(!undefined); // true

//E em muitos outros elementos!