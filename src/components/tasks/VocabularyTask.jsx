import React from 'react';
import { getRandomProperty } from '../../utils/randomFunctions';

class VocabularyTask extends React.Component {
  constructor(props) {
    super(props);
    this.state.currentWord = getRandomProperty(props.vocabulary.default);
  }

  state = {
    value: '',
  };

  handleClick = () => {
    this.props.setTaskResult(
      this.props.vocabulary[this.state.currentWord]
      .includes(this.state.value.trim().toLowerCase()));
  }

  handleChange = (event) => {
    event.persist();
    this.setState(() => ({ value: event.target.value }));
  }

  render = () => (
    <div className="custom-modal">
      <h3 className="custom-modal__header">Переведи слово:</h3>
      <div className="custom-modal__content">
        <div>{this.state.currentWord}</div>
        <input className="custom-modal__input" type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
      <button onClick={this.handleClick} className="button button--success">Проверить</button>
    </div>
  );
} 

export default VocabularyTask;