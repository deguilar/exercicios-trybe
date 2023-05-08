let student = {
  primeiroNome: 'André Augusto',
  ultimoNome: 'Dias Aguilar',
  email: 'andreaguilar.ti@gmail.com',
  telefone: 3199990000,
};


function adicionandoPropiedades (objeto, chave, valor) {
  objeto[chave] = valor;
}

console.log(student);

//________________________________________________

adicionandoPropiedades(student, 'gitHub', 'github.com/deguilar');
console.log(student);

//________________________________________________

let newKey = 'rua';
let nomeRua = 'Ánapolis';

adicionandoPropiedades(student, newKey, nomeRua);
console.log(student);

//________________________________________________

newKey = 'fullname';
let nomeCompleto = student.primeiroNome + ' ' + student.ultimoNome;

adicionandoPropiedades(student, newKey, nomeCompleto);
console.log(student);