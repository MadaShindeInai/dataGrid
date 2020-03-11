import React from 'react';

import './Row.scss';
import Cell from '../cell';
import data from "../../data";

const Row = ({ index }) => {

  return (
    <div className='app-row '>
      {/* <Cell value={data[index].firstName} />
      <Cell value={data[index].lastName} />
      <Cell value={data[index].city} />
      <Cell value={data[index].bool} />
      <Cell value={data[index].email} />
      <Cell value={data[index].number} />
      <Cell value={data[index].word} /> */}
      <span className="app-cell">{data[index].firstName}</span>
      <span className="app-cell">{data[index].firstName}</span>
      <span className="app-cell">{data[index].firstName}</span>
      <span className="app-cell">{data[index].firstName}</span>
      <span className="app-cell">{data[index].firstName}</span>
      <span className="app-cell">{data[index].firstName}</span>
      <span className="app-cell">{data[index].firstName}</span>
    </div>
  )
}

export default Row;