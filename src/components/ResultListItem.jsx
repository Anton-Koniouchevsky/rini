import React from 'react';

const ResultListItem = ({date, level}) => (
  <li>
    <span>{level} уровень - </span>
    <span>{new Date(date).toLocaleDateString()}</span>
  </li>
);

export { ResultListItem };