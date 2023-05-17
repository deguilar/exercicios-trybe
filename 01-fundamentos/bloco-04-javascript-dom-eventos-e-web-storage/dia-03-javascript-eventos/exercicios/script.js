
const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.

//____________________________________________________________________

// 01 - Criando os dias com for e colocando classes de acordo com os dias, sexta feiras e feriados

const criandoDias = () => {
  const capturandoUL = document.getElementById("days");

  for (let index = 0; index < decemberDaysList.length; index += 1) {
    const dias = decemberDaysList[index];
    const diaListaItem = document.createElement('li');
    diaListaItem.className = 'day'
    diaListaItem.innerHTML = dias;

    capturandoUL.appendChild(diaListaItem);

    if ((decemberDaysList[index] === 24) || (decemberDaysList[index] === 25) || (decemberDaysList[index] === 31)) {
      diaListaItem.className = 'day holiday';
    }

    if ((decemberDaysList[index] === 4) || (decemberDaysList[index] === 11) || (decemberDaysList[index] === 18)) {
      diaListaItem.className = 'day friday';
    }

    if (decemberDaysList[index] === 25) {
      diaListaItem.className = 'day friday holiday'
    }
  };
}

criandoDias();

// ____________________________________________________________________

// 02 - Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday"

const alteraCor = () => {
  const capturandoBotao = document.getElementById("btn-holiday");
  const capturandoFeriados = document.querySelectorAll('.holiday');

  //criando um evento de click para o botão
  capturandoBotao.addEventListener('click', () => {
    //criando o for para percorrer o array de classes chamados de holiday
    for (let index = 0; index < capturandoFeriados.length; index += 1) {
      //capturando cada classe holiday
      const elemento = capturandoFeriados[index]
      //minhaNovaCor = document.querySelectorAll('.holiday').style.backgroundColor === 'yellow
      const minhaNovaCor = elemento.style.backgroundColor === 'yellow';
      // se verdadeiro
      if (minhaNovaCor) {
        // se capturandoFeriados[index].style.backgroungColor = vai deixar a cor cinza
        elemento.style.backgroundColor = 'rgb(238, 238, 238)';
        //senão
      } else {
        // se capturandoFeriados[index].style.backgroungColor = vai deixar a cor amarela
        elemento.style.backgroundColor = 'yellow';
      }
    }
  });
  
}

alteraCor();

// ____________________________________________________________________

// 03 - Implemente uma função que modifica o texto exibido nos dias que são sextas-feiras

const modificaTexto = (arrayFridays) => {
  const capturandoBotaoSexta = document.getElementById('btn-friday');
  const capturandoSextas = document.querySelectorAll('.friday');

  capturandoBotaoSexta.addEventListener('click', () => {
    for (let index = 0; index < capturandoSextas.length; index += 1) {
      const minhasSextas = capturandoSextas[index];
      if (minhasSextas.innerHTML !== 'Sextou') {
        minhasSextas.innerHTML = 'Sextou';
      } else {
        minhasSextas.innerHTML = arrayFridays[index];
      }
    }
  })
}

const dezembroSextas = [4, 11, 18, 25];
modificaTexto(dezembroSextas);

// ____________________________________________________________________

// 04 - Implemente duas funções que criem um efeito de "zoom"

const poeZoom = () => {
  const capturaDay = document.querySelector('#days');
  capturaDay.addEventListener('mouseover', (event) => {
    event.target.style.fontSize = '30px'
  })
}

const tiraZoom = () => {
  const capturaDay = document.getElementById('days');
  capturaDay.addEventListener('mouseout', (event) => {
    event.target.style.fontSize = '20px';
  })
}

poeZoom();
tiraZoom();

// ____________________________________________________________________

// 05 - Implemente uma função que seleciona uma tarefa e atribua a cor da tarefa ao dia do calendário. Nesse requisito vamos utilizar duas funções. A primeira para selecionar e desmarcar a tarefa, a segunda pra mudar a cor do texto do calendário de acordo com a cor referente a tarefa.

const selecionaTarefa = () => {
  const capturaTarefa = document.querySelectorAll('.task');
  for (let index = 0; index < capturaTarefa.length; index += 1) {
    capturaTarefa[index].addEventListener('click', (event) => {
      let selecaoPrevia = document.querySelector('.selected');

      event.target.classList.add('selected');
      // verifica se existe uma tarefa que estava selecionada previamente ao clique
      if (selecaoPrevia !== null) {
        selecaoPrevia.classList.remove('selected')
      }
    })
  }
}

selecionaTarefa();

const setDayColor = () => {

  let days = document.querySelector('#days');

  days.addEventListener('click', (event) => {

    let selectedTask = document.querySelector('.selected');
    if (selectedTask === null || 
      event.target.style.color === selectedTask.style.backgroundColor) {
      // Se não houver tarefa selecionada
      // ou se o dia clicado já é da cor selecionada
      // aplicaremos a cor padrão
      event.target.style.color = 'rgb(119,119,119)';
    } else {
      // Se o dia clicado é de cor diferente da selecionada
      // aplica a cor selecionada ao dia
      event.target.style.color = selectedTask.style.backgroundColor;
    }
  });
};

setDayColor();

//___________________________________________________________________

// 06 - Adicionando compromissos a seu calendário

const addNewTask = () => {
  const getInputField = document.querySelector('#task-input');
  const addInputButton = document.querySelector('#btn-add');
  const getTaskList = document.getElementById('task-list');

  addInputButton.addEventListener('click', () => {
    if (getInputField.value.length > 0) {
      const newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    } else {
      alert('Error: Digite ao menos 1 caractere.');
    }
  });

  getInputField.addEventListener('keyup', (event) => {
    if (event.key === 'Enter' && getInputField.value.length > 0) {
      const newLi = document.createElement('li');
      newLi.innerText = getInputField.value;

      getTaskList.appendChild(newLi);
      getInputField.value = '';
    }
  });
}

addNewTask();


