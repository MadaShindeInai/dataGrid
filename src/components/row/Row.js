import React from 'react';
import './Row.scss';

const PADDING_SIZE = 30;
const Row = ({ columnIndex, rowIndex, data, style }) => {
  console.log(typeof columnIndex, columnIndex);

  return (
    <div className='app-row '>
      : <span style={{
        ...style,
        top: `${parseFloat(style.top) + PADDING_SIZE}px`
      }
      } className="app-cell">{columnIndex === 7 ? <input checked={data[rowIndex][columnIndex]} id={rowIndex} type='checkbox' /> : data[rowIndex][columnIndex]}</span>

    </div>
  )
}

export default Row;