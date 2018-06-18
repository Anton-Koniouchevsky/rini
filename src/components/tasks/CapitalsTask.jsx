import React from 'react';
import { getRandomProperty } from '../../utils/randomFunctions';

const flags = require.context('../../assets/images/flags', true);
const imagePath = (name) => flags(name, true);

class CapitalsTask extends React.Component {
  constructor(props) {
    super(props);
    this.state.currentCountry = getRandomProperty(props.countries.default);
  }

  state = {
    value: '',
  };

  handleClick = () => {
    this.props.setTaskResult(
      this.props.countries[this.state.currentCountry]
        .capital
        .includes(this.state.value.trim().toLowerCase()));
  }

  handleChange = (event) => {
    event.persist();
    this.setState(() => ({ value: event.target.value }));
  }

  render = () => (
    <div className="custom-modal">
      <h3 className="custom-modal__header">Назови столицу страны (Rus+Eng):</h3>
      <div className="custom-modal__content">
        <img src={imagePath(`./${this.state.currentCountry}.png`)} alt="Флаг" />
        <div>{this.state.currentCountry.charAt(0).toUpperCase() + this.state.currentCountry.slice(1)}</div>
        <input className="custom-modal__input" type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
      <button onClick={this.handleClick} className="button button--success">Проверить</button>
    </div>
  );
} 

export default CapitalsTask;