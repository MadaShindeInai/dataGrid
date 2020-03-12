import React from 'react';
import './ControllsItem.scss'

const ControllsItem = ({ title }) => {
  return (
    <div className="controlls__item ">
      <span>{title}</span>
      <button type="button" onClick={() => { }} className="controlls__sort-button">&#x2191;</button>
      <button type="button" onClick={() => { }} className="controlls__sort-button">&#x2193;</button>
      <button type="button" onClick={() => { }} className="controlls__search-button" />
    </div>
  )
}
export default ControllsItem;