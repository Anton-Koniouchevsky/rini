import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

const Card = SortableElement(({ value }) => {
  return (<div className="button--primary horizontalItem" >{value}</div>);
});

export default Card;