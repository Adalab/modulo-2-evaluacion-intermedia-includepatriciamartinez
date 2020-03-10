'use-strict';

const typeNumberEl = document.querySelector('.js-number');

const buttonEl = document.querySelector('.js-button');

const clueEl = document.querySelector('.js-clue');

const attemptEl = document.querySelector('js-attempt');

//función que genera número aleatorio

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

//crear un número aleatorio

const randomNumber = getRandomNumber(100);
console.log(randomNumber);

//en randomnuNmberEl meto número aleatorio

//click event en buttonEl

function nombreVariable(event) {

  const currentNumber = typeNumberEl.value;


  //en clueEl if numberEl>typeNumberEl y click buttonEl =Demasiado alto.
  if (currentNumber > typeNumberEl) {

    console.log('Demasiado alto');

    //en clueEL if else number<rtypeNumberEl y click buttonEl=Demasiado bajo.
  } else if (customElements > typeNumberEl) {
    console.log('Demasiado bajo')

    //en clueEl if else number=randomNumber y click buttonEl=Has ganado campeona!!

  } else if (customElements === typeNumberEl) {
    console.log('Has ganado campeona!')

    //else number=nan y click buttonEl=El número debe estar entre 1 y 100.   

  } else if (currentNumber === NaN) {
    console.log('El número debe estar entre 1 y 100.')

  }

}
buttonEl.addEventListener('click', typeNumberEl)










//no se cómo poner este último...