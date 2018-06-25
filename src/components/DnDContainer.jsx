import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import SortableElement from './SortableElement';

const DnDContainer = SortableContainer(({ items }) => {

  return (
    <div className="horizontalList">
      {items.map((value, index) => (
        <SortableElement key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

export default DnDContainer;