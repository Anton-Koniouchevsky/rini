import React from 'react';
import DnDContainer from '../DnDContainer';
import { shuffle, generateNumber } from '../../utils/randomFunctions';
import { arrayMove } from 'react-sortable-hoc';

class SequenceTask extends React.Component {
  constructor() {
    super();
    const sequence = Array.from({ length: 5 }, () => generateNumber(1, 150));    
    this.state.sequence = sequence;
    this.state.shuffledNumbers = shuffle(sequence);
  }

  state = {};

  handleClick = () => {
    this.props.setTaskResult(this.state.shuffledNumbers.every((number, index, array) =>  index === array.length - 1 || number <= array[index + 1]));
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      shuffledNumbers: arrayMove(this.state.shuffledNumbers, oldIndex, newIndex),
    });
  };

  render = () => {
    return (
      <div className="custom-modal">
        <h3 className="custom-modal__header">Упорядочи числа по возрастанию</h3>
        <div className="custom-modal__content">
          <DnDContainer 
            items={this.state.shuffledNumbers} 
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

export default SequenceTask;