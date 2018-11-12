import React from 'react';

const Grid = ({ item, alignVertical, ...props }) => (
  <div
    className={(item ? 'tbm-grid-item' : 'tbm-grid') + (alignVertical ? ' align-vertical' : '')}
    {...props}
  />
);

export default Grid;
