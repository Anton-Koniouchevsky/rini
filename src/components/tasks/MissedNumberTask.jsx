import React from 'react';
import { generateNumber } from '../../utils/randomFunctions';

class MissedNumberTask extends React.Component {
  constructor() {
    super();
    this.state.increment = generateNumber(1, 10);
    this.state.startNumber = generateNumber(1, 50);
    this.state.sequence = Array.from({ length: 5 }, (_, index) => {
      return this.state.startNumber + this.state.increment * index;
    });
    this.state.missedNumberIndex = generateNumber(1, 5);
  }

  state = {
    value: '',
  };

  handleClick = () => {
    const result = 
      this.props.setTaskResult(Number(this.state.value) === this.state.missedNumberIndex * this.state.increment + this.state.startNumber);
  }

  handleChange = (event) => {
    event.persist();
    this.setState(() => ({ value: event.target.value }));
  }

  render = () => (
    <div className="custom-modal">
      <h3 className="custom-modal__header">Вставь пропущенное число в последовательности:</h3>
      <div className="custom-modal__content">
        <div>
          {this.state.sequence.map((number, index) => {
            return <span key={index}> {index === this.state.missedNumberIndex? '?' : number} </span>
          })}
        </div>
        <input className="custom-modal__input" type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
      <button onClick={this.handleClick} className="button button--success">Проверить</button>
    </div>
  );
} 

export default MissedNumberTask;