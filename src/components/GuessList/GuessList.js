import React from 'react';

function GuessList({guessList}) {
  return (guessList.map((word) => (
      <p className='guess' key={Math.floor(Math.random()*100)}>{word}</p>
    ))
  );
}

export default GuessList;
