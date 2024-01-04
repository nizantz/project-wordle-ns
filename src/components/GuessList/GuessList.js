import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import Guess from '../Guess/Guess';
function GuessList({guessList, answer}) {
  return (range(NUM_OF_GUESSES_ALLOWED).map((num) => (
      <Guess key={num} value={guessList[num]} answer={answer}/>
      // <p className='guess' key={Math.floor(Math.random()*100)}>{word}</p>
      // <p className='guess'>
      //     {range(5).map((index) => (<span class="cell"></span>))}
      // </p>
    ))
  );
}

export default GuessList;
