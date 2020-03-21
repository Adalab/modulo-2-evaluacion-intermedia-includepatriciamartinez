'use-strict';

//VARIABLES

const buttonEl = document.querySelector('.js-input-btn');
const typeNumberEl = document.querySelector('.js-input-number');
const feedbackEl = document.querySelector('.js-feedback');
const counterEl = document.querySelector('.js-counter');


/*const typeNumberEl = document.querySelector('.js-input-number');

const clueEl = document.querySelector('.js-clue');

const attemptEl = document.querySelector('.js-attempt');

const counterEl = document.querySelector('.js-counter');*/


//FUNCIONES

//función que genera número aleatorio

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//crear un número aleatorio
//en randomnuNmberEl meto número aleatorio
// consoleo para ver qué funciona
const randomNumber = getRandomNumber(100);
console.log('Número aleatorio:', randomNumber);

const ShowClue = function (event) {
  event.preventDefault();

  const inputNumberValue = parseInt(typeNumberEl.value); //todo value de input sale como string a menos que sea de tipo number, para nuestro ejemplo era de number pero ante la duda pongo parseInt para convertirlo.
  console.log(inputNumberValue);

  if (inputNumberValue === randomNumber) {
    feedbackEl.innerHTML = ('Has ganado campeona!!!.');
  } else if (inputNumberValue < 1 || inputNumberValue > 100) {
    feedbackEl.innerHTML = ('El número debe estar entre 1 y 100'); //es el más restrictivo y por eso lo pongo el primero para que si no entra aquí pase a los siguientes if.
  } else if (isNaN(inputNumberValue)) {
    feedbackEl.innerHTML = ('Introduce algo.');
  } else if (inputNumberValue > randomNumber) {
    feedbackEl.innerHTML = ('Demasiado alto.');
  } else if (inputNumberValue < randomNumber) {
    feedbackEl.innerHTML = ('Demasiado bajo.');
  }
}


//EVENTOS
//click event en buttonEl
buttonEl.addEventListener('click', ShowClue);