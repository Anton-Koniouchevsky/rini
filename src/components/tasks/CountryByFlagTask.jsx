import React from 'react';
import { getRandomProperty } from '../../utils/randomFunctions';
import * as countries from '../../assets/tasks/countries.json';

const flags = require.context('../../assets/images/flags', true);
const imagePath = (name) => flags(name, true);

const CountryByFlagTask = (props) => {
  const currentCountry = getRandomProperty(countries.default);
  props.setCorrectAnswer(countries.default[currentCountry].country);
  return (
    <div className="custom-modal">
      <h3 className="custom-modal__header">Угадай страну по флагу (Rus + Eng):</h3>
      <div className="custom-modal__content">
        <img src={imagePath(`./${currentCountry}.png`)} alt="Флаг"/>
      </div>
    </div>
  );
} 

export default CountryByFlagTask;