import React from 'react';
import DnDContainer from '../DnDContainer';
import { arrayMove } from 'react-sortable-hoc';
import { shuffle, generateNumber } from '../../utils/randomFunctions';

class SequenceTask extends React.Component {
  constructor(props) {
    super(props);
    const sequence = Array.from({ length: 5 }, () => generateNumber(1, 150));    
    this.state.sequence = sequence;
    this.state.shuffledNumbers = shuffle(sequence);
    props.setCorrectAnswer([Array.from(sequence).sort((a, b) => a - b).join('')]);
  }

  state = {};

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      shuffledNumbers: arrayMove(this.state.shuffledNumbers, oldIndex, newIndex),
    });
  };

  render = () => {
    this.props.setValue(this.state.shuffledNumbers.join(''));
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
      </div>
    );
  }
}

export default SequenceTask;