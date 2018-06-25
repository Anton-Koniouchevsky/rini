import React from 'react';
import { SortableElement } from 'react-sortable-hoc';

export default SortableElement(({ value }) => {
  return (<div className="button--primary horizontalItem" >{value}</div>);
});