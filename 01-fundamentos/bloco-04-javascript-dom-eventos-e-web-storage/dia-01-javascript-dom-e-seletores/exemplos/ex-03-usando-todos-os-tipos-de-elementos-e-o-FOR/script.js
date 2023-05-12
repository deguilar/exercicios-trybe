// Perceba que todo o conteúdo da página está na cor branca. Utilize o que aprendeu no conteúdo de hoje para que a página fique igual ao Administrador de Tempo da Trybe.

const admDeTempo = document.getElementById('header-container');
admDeTempo.style.backgroundColor = 'green';

const emergencia = document.getElementsByClassName('emergency-tasks')[0];
emergencia.style.backgroundColor = 'pink';

const naoEmergencia = document.getElementsByClassName('no-emergency-tasks')[0];
naoEmergencia.style.backgroundColor = 'yellow';

const urgente = document.querySelectorAll('.emergency-tasks div h3');
for (let index = 0; index < urgente.length; index += 1) {
  urgente[index].style.backgroundColor = 'purple';
}

const naoUrgente = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < urgente.length; index += 1) {
  naoUrgente[index].style.backgroundColor = 'black';
}

const rodape = document.getElementsByTagName('footer')[0];
rodape.style.backgroundColor = 'green';




