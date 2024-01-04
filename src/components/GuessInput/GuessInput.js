import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessInput({guessWord, setGuessWord, guessList, setGuessList, gameStatus, setGameStatus, answer}) {
  return (
  <form
    className='guess-input-wrapper'
    onSubmit={(event) => {
      event.preventDefault();
      // console.log({guessWord});
      const nextGuestList = [...guessList, guessWord];
      setGuessList(nextGuestList);
      if (guessWord.toUpperCase() === answer) {
        setGameStatus('won');
      } else if (nextGuestList.length >= NUM_OF_GUESSES_ALLOWED) {
        setGameStatus('lost');
      }
      setGuessWord('');
    }}
  >
    <label htmlFor='guess-the-word'>Enter guess:</label>
    <input
      required
      id="guess-the-word"
      type="text"
      title="5 letter word"
      value={guessWord}
      minLength={5}
      maxLength={5}
      pattern='[a-zA-Z]{5}'
      disabled={gameStatus !== 'running'}
      onChange={(event) => setGuessWord(event.target.value.toUpperCase())}
    />
  </form>);
}

export default GuessInput;
