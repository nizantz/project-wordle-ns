import React from 'react';
import GuessInput from '../GuessInput/GuessInput';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessWord, setGuessWord] = React.useState('');
  return <>
    {guessWord === answer && <p>Matches</p>}
    <GuessInput
      guessWord={guessWord}
      setGuessWord={setGuessWord}
    />
  </>;
}

export default Game;
