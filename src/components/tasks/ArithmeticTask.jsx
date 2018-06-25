import React from 'react';
import { generateNumber, generateArithmeticOperation } from '../../utils/randomFunctions';

const ArithmeticTask = (props) =>  {
  const firstNumber = generateNumber(10, 60);
  const operation = generateArithmeticOperation();
  const secondNumber = generateNumber(5, 20);
  const correctAnswer = operation === '+' ? firstNumber + secondNumber : firstNumber - secondNumber
  props.setCorrectAnswer([String(correctAnswer)]);

  return (
    <div className="custom-modal">
      <h3 className="custom-modal__header">Реши пример:</h3>
      <div className="custom-modal__content">
        <div>
          <span>{firstNumber}</span>
          <span id="operation">{operation}</span>
          <span id="second-number">{secondNumber}</span>
          <span>=</span>
        </div>
      </div>
    </div>
  );
} 

export default ArithmeticTask;