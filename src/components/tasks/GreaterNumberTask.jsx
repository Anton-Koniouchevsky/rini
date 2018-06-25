import React from 'react';
import { generateNumber } from '../../utils/randomFunctions';

const GreaterNumberTask = (props) => {
  const firstNumber = generateNumber(1, 60);
  const secondNumber = generateNumber(1, 60);
  const correctAnswer = firstNumber < secondNumber ? '<' : firstNumber > secondNumber ? '>' : '=';
  props.setCorrectAnswer([correctAnswer]);

  return (
    <div className="custom-modal">
      <h3 className="custom-modal__header">Больше, меньше или равно?</h3>
      <div className="custom-modal__content">
        <div className="custom-modal__row">
          <div>
            <span>{firstNumber} </span>
            ?
            <span> {secondNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
} 

export default GreaterNumberTask;