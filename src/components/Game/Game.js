import React from 'react';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [guessWord, setGuessWord] = React.useState('');
  const [guessList, setGuessList] = React.useState([]);
  return <>
    <div className='guess-results'>
      <GuessList guessList={guessList} answer={answer}/>
      {/* {guessList.map((word) => (
        <GuessList key={Math.floor(Math.random()*100)} word={word} />
      ))} */}
    </div>
    <GuessInput
      guessWord={guessWord}
      setGuessWord={setGuessWord}
      guessList={guessList}
      setGuessList={setGuessList}
    />
  </>;
}

export default Game;
