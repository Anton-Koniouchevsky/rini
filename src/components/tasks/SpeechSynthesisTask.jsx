import React from 'react';
import * as words from '../../assets/tasks/speechWords.json';
import { getRandomArrayItem } from '../../utils/randomFunctions';

class SpeechSynthesisTask extends React.Component {
  constructor() {
    super();
    this.state.currentWord = getRandomArrayItem(words.default);
    this.msg = new SpeechSynthesisUtterance(this.state.currentWord);
    this.msg.lang = 'en-US';
  }

  state = {
    value: '',
  };

  handleClick = () => {
    this.props.setTaskResult(this.state.currentWord === this.state.value.trim().toLowerCase());
    const newWord = getRandomArrayItem(words.default);
  }

  handleChange = (event) => {
    event.persist();
    this.setState(() => ({ value: event.target.value }));
  }

  speakWord = () => {    
    this.msg.rate = this.msg.rate === 1 ? 0.4 : 1;
    speechSynthesis.speak(this.msg);
  }

  render = () => (
    <div className="custom-modal">
      <h3 className="custom-modal__header">Впиши услышанное слово:</h3>
      <div className="custom-modal__content">
        <button onClick={this.speakWord} className="button--round button--primary fa fa-volume-up"></button>
        <input className="custom-modal__input" type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
      <button onClick={this.handleClick} className="button button--success">Проверить</button>
    </div>
  );
} 

export default SpeechSynthesisTask;