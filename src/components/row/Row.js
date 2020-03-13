import React from 'react';
import './Row.scss';

const PADDING_SIZE = 30;
const Row = ({ columnIndex, rowIndex, data, style }) => {

  return (
    <div className='app-row '>
      <span style={{
        ...style,
        top: `${parseFloat(style.top) + PADDING_SIZE}px`
      }
      } className="app-cell">{data[rowIndex][`${columnIndex}`]}</span>
    </div>
  )
}

export default Row;