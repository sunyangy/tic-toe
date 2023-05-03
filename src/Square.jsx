import React from 'react';

export default function Square({ value, onSquareClick }) {
  return (
    <div
      className={
        'square-item ' + (value === 'x' ? 'square-item-x' : 'square-item-o')
      }
      onClick={onSquareClick}
    >
      {value}
    </div>
  );
}
