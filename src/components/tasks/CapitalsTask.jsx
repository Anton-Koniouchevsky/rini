import React from 'react';
import { getRandomProperty } from '../../utils/randomFunctions';
import * as countries from '../../assets/tasks/countries.json';

const flags = require.context('../../assets/images/flags', true);
const imagePath = (name) => flags(name, true);

const CapitalsTask = (props) => {
  const currentCountry = getRandomProperty(countries.default);
  props.setCorrectAnswer(countries.default[currentCountry].capital);
  return (
    <div className="custom-modal">
      <h3 className="custom-modal__header">Назови столицу страны (Rus+Eng):</h3>
      <div className="custom-modal__content">
        <img src={imagePath(`./${currentCountry}.png`)} alt="Флаг" />
        <div>{currentCountry.charAt(0).toUpperCase() + currentCountry.slice(1)}</div>
      </div>
    </div>
  );
} 

export default CapitalsTask;