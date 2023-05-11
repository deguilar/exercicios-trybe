const meuNome = 'Isabella';
console.log('Oi' + ' ' + meuNome + '!');

// Essa solução nada elegante é como era feito antes do ES6 introduzir uma nova forma de criar e manipular strings dinamicamente por meio de template literals. Com o template literals, o exemplo acima pode ser substituído por:

console.log(`Oi ${meuNome}!`);