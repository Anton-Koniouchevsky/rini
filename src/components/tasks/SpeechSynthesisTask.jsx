import React from 'react';
import { getRandomArrayItem } from '../../utils/randomFunctions';
import * as words from '../../assets/tasks/speechWords.json';

const SpeechSynthesisTask = (props) => {
  const currentWord = getRandomArrayItem(words.default);
  const msg = new SpeechSynthesisUtterance(currentWord);
  msg.lang = 'en-US';
  msg.rate = 1;
  props.setCorrectAnswer([currentWord]);

  const speakWord = () => {    
    msg.rate = msg.rate === 1 ? 0.4 : 1;
    speechSynthesis.speak(msg);
  }

  return (
    <div className="custom-modal">
      <h3 className="custom-modal__header">Впиши услышанное слово:</h3>
      <div className="custom-modal__content">
        <button onClick={speakWord} className="button--round button--primary fa fa-volume-up"></button>
      </div>
    </div>
  );
} 

export default SpeechSynthesisTask;