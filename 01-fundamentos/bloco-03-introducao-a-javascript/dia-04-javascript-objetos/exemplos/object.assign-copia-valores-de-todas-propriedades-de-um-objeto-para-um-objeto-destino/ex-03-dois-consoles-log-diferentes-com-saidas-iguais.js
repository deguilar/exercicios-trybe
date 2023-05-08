let person = {
  name: 'Roberto',
};

let lastName = {
  lastName: 'Silva',
};

let clone = Object.assign(person, lastName);

console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
console.log(person); // { name: 'Roberto', lastName: 'Silva' }


// Nesse exemplo, o clone é exatamente igual ao objeto person e, se você mudar qualquer propriedade nele, observará que o objeto person também será modificado. Isso ocorre devido ao fato de que o objeto retornado pelo método Object.assign é o próprio objeto-destino, que foi alterado ao adicionar as novas propriedades.


clone.name = 'Maria';

console.log('Mudando a propriedade name através do objeto clone')
console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
console.log('--------------');

person.lastName = 'Ferreira';

console.log('Mudando a propriedade lastName através do objeto person');
console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }