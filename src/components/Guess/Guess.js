import React from 'react';
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
function Guess({value, answer}) {

  const result = checkGuess(value, answer);
  console.log(result);
  return (
    <p className="guess">
      { range(5).map((num) => 
          <span className={`cell ${result ? result[num]["status"]: undefined}`} key={num}>{ result ? result[num]["letter"] : undefined }</span>
        )
      }
    </p>);
}

export default Guess;
