import React from 'react';
import { generateNumber, generateArithmeticOperation } from '../../utils/randomFunctions';

class ArithmeticTask extends React.Component {
  constructor() {
    super();
    this.state.firstNumber = generateNumber(10, 60);
    this.state.operation = generateArithmeticOperation();
    this.state.secondNumber = generateNumber(5, 20);
  }

  state = {
    value: '',
  };

  handleClick = () => {
    const result = this.state.operation === '+' ? 
      this.state.firstNumber + this.state.secondNumber :
      this.state.firstNumber - this.state.secondNumber;
    this.props.setTaskResult(Number(this.state.value) === result);
  }

  handleChange = (event) => {
    event.persist();
    this.setState(() => ({ value: event.target.value }));
  }

  render = () => (
    <div className="custom-modal">
      <h3 className="custom-modal__header">Реши пример:</h3>
      <div className="custom-modal__content">
        <div>
          <span>{this.state.firstNumber}</span>
          <span id="operation">{this.state.operation}</span>
          <span id="second-number">{this.state.secondNumber}</span>
          <span>=</span>
        </div>
        <input className="custom-modal__input" type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
      <button onClick={this.handleClick} className="button button--success">Проверить</button>
    </div>
  );
} 

export default ArithmeticTask;