import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import Card from './Card';

const DnDContainer = SortableContainer(({ items }) => {

  return (
    <div className="horizontalList">
      {items.map((value, index) => (
        <Card key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

export default DnDContainer;