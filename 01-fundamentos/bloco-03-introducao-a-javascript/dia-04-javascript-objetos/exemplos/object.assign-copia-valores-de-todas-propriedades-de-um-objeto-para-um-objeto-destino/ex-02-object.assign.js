let person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

let info = {
  age: 23, // OBS: a idade muda para 23, pois funciona age armazenou um novo valor
  job: 'engenheiro', 
};

let family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */