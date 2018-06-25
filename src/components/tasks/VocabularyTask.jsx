import React from 'react';
import { getRandomProperty } from '../../utils/randomFunctions';
import * as vocabulary from '../../assets/tasks/vocabulary.json';

const VocabularyTask = (props) => {
  const currentWord = getRandomProperty(vocabulary.default);
  props.setCorrectAnswer(vocabulary.default[currentWord]);

  return (
    <div className="custom-modal">
      <h3 className="custom-modal__header">Переведи слово:</h3>
      <div className="custom-modal__content">
        <div>{currentWord}</div>
      </div>
    </div>
  );

} 

export default VocabularyTask;