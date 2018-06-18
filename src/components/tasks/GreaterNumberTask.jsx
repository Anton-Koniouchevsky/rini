import React from 'react';
import { generateNumber } from '../../utils/randomFunctions';

class GreaterNumberTask extends React.Component {
  constructor() {
    super();
    this.state.firstNumber = generateNumber(1, 60);
    this.state.secondNumber = generateNumber(1, 60);
  }

  state = {
  };

  handleLessClick = () => {
    const result = this.state.firstNumber < this.state.secondNumber;
    this.handleClick(result);
  }

  handleEqualClick = () => {
    const result = this.state.firstNumber === this.state.secondNumber;
    this.handleClick(result);
  }

  handleGreatClick = () => {
    const result = this.state.firstNumber > this.state.secondNumber;
    this.handleClick(result);
  }

  handleClick = (result) => {
    this.props.setTaskResult(result);
  }

  render = () => (
    <div className="custom-modal">
      <h3 className="custom-modal__header">Больше, меньше или равно?</h3>
      <div className="custom-modal__content">
        <div className="custom-modal__row">
          <div>
            <span>{this.state.firstNumber} </span>
            ?
            <span> {this.state.secondNumber}</span>
          </div>
          <div>
            <button onClick={this.handleLessClick} className="button--primary button--round">&lt;</button>
            <button onClick={this.handleEqualClick} className="button--primary button--round">=</button>
            <button onClick={this.handleGreatClick} className="button--primary button--round">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GreaterNumberTask;