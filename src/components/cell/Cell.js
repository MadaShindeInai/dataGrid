import React from 'react';

import './Cell.scss';


const Cell = ({ value }) => {
  return (
    <span className="app-cell col-1">{value}</span>
  )
}
export default Cell;