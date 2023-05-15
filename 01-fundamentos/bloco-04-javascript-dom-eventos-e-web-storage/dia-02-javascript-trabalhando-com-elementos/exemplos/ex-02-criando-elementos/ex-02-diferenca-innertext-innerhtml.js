
// Criando dois novos elementos
let newElement2 = document.createElement('div');
let newElement3 = document.createElement('div');

newElement2.innerText = 'Um texto sem marcação HTML';
newElement3.innerHTML = '<b>Um texto com marcação HTML</b>';

parent.appendChild(newElement2);
parent.appendChild(newElement3);