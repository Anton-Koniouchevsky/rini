import React from 'react';
import { Link } from 'react-router-dom';

const ResultListItem = ({date, level}) => (
  <li>
    <span>{level} уровень - </span>
    <span>{new Date(date).toLocaleDateString()}</span>
  </li>
);

export { ResultListItem };