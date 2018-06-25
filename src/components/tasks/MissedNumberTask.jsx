import React from 'react';
import { generateNumber } from '../../utils/randomFunctions';

const MissedNumberTask = (props) => {
  const increment = generateNumber(1, 10);
  const startNumber = generateNumber(1, 50);
  const sequence = Array.from({ length: 5 }, (_, index) => {
    return startNumber + increment * index;
  });
  const missedNumberIndex = generateNumber(1, 5);
  props.setCorrectAnswer([String(sequence[missedNumberIndex])]);

  return (
    <div className="custom-modal">
      <h3 className="custom-modal__header">Вставь пропущенное число в последовательности:</h3>
      <div className="custom-modal__content">
        <div>
          {sequence.map((number, index) => {
            return <span key={index}> {index === missedNumberIndex? '?' : number} </span>
          })}
        </div>
      </div>
    </div>
  );
} 

export default MissedNumberTask;