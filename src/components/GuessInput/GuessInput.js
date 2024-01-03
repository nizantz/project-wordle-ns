import React from 'react';

function GuessInput({guessWord, setGuessWord}) {
  return (
  <form
    className='guess-input-wrapper'
    onSubmit={(event) => {
      event.preventDefault();
      console.log({guessWord});
      setGuessWord('');
    }}
  >
    <label htmlFor='guess-the-word'>Enter guess:</label>
    <input
      id="guess-the-word"
      type="text"
      title="5 letter word"
      value={guessWord}
      minLength={5}
      maxLength={5}
      pattern='[a-zA-Z]{5}'
      onChange={(event) => setGuessWord(event.target.value)}
    />
  </form>);
}

export default GuessInput;
