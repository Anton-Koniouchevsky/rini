import React from 'react';
import DnDContainer from '../DnDContainer';
import { shuffleWord, getRandomArrayItem } from '../../utils/randomFunctions';
import { arrayMove } from 'react-sortable-hoc';
import * as words from '../../assets/tasks/scrambleWords.json';

class ScrambleTask extends React.Component {
  constructor() {
    super();
    const word = getRandomArrayItem(words.default);    
    this.state.word = word;
    this.state.shuffledWord = shuffleWord(word);
  }

  state = {};

  handleClick = () => {
    this.props.setTaskResult(this.state.shuffledWord.join('') === this.state.word);
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      shuffledWord: arrayMove(this.state.shuffledWord, oldIndex, newIndex),
    });
  };

  render = () => {
    return (
      <div className="custom-modal">
        <h3 className="custom-modal__header">Собери слово</h3>
        <div className="custom-modal__content">
          <DnDContainer 
            items={this.state.shuffledWord} 
            onSortEnd={this.onSortEnd} 
            axis="x"
            helperClass="SortableHelper"
          />
        </div>
        <button onClick={this.handleClick} className="button button--success">Проверить</button>
      </div>
    );
  }
}

export default ScrambleTask;