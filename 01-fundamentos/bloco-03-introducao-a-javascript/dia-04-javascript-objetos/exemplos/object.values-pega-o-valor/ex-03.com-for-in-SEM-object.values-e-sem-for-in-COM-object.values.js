let student = {
  html: 'Muito Bom',
  css: 'Bom',
  javascript: 'Ótimo',
  softskill: 'Ótimo',
};

//_____________________________________________
// só pra ver o que acontece
// function listaDeValoresComFor (student) {
//   for (let index in student) {
//     console.log(student[index]);
//   }
// }

// listaDeValoresComFor(student); //R: Muito Bom, Bom, Ótimo, Ótimo
//_____________________________________________

function listaDeValoresComFor (student) {
  let array = [];
  for (let index in student) {
    array.push(student[index]); // se fosse array.push(index), a resposta seria ['html', 'css', 'javascript', 'softskill']
  }
  return array;
}

console.log(listaDeValoresComFor(student));

//_____________________________________________

function listaDeValoresSemFor (student) {
  return Object.values(student);
}

console.log(listaDeValoresSemFor(student));