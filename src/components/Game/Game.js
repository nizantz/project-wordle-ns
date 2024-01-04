import React from 'react';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [guessWord, setGuessWord] = React.useState('');
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('running');
  return <>
    <div className='guess-results'>
      {/* <p>{gameStatus} {answer}</p> */}
      <GuessList guessList={guessList} answer={answer}/>
    </div>
    <GuessInput
      guessWord={guessWord}
      setGuessWord={setGuessWord}
      guessList={guessList}
      setGuessList={setGuessList}
      gameStatus={gameStatus}
      setGameStatus={setGameStatus}
      answer={answer}
    />
    {gameStatus === 'won' && (
      <WonBanner numOfGuesses={guessList.length} />
    )}
    {gameStatus === 'lost' && (
      <LostBanner answer={answer} />
    )}

  </>;
}

export default Game;
