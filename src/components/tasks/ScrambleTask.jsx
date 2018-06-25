import React from 'react';
import DnDContainer from '../DnDContainer';
import { arrayMove } from 'react-sortable-hoc';
import { shuffleWord, getRandomArrayItem } from '../../utils/randomFunctions';
import * as words from '../../assets/tasks/scrambleWords.json';

class ScrambleTask extends React.Component {
  constructor(props) {
    super(props);
    const word = getRandomArrayItem(words.default);    
    this.state.shuffledWord = shuffleWord(word);
    props.setCorrectAnswer([word]);
  }

  state = {};

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      shuffledWord: arrayMove(this.state.shuffledWord, oldIndex, newIndex),
    });
  };

  render = () => {
    this.props.setValue(this.state.shuffledWord.join(''));
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
      </div>
    );
  }
}

export default ScrambleTask;