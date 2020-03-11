import React from 'react';
import ControllsItem from '../controlls-item'
import './Controlls.scss'

const Controlls = ({ data }) => {
  const titles = Object.keys(data[0]).slice(1);
  return (
    <div className="controlls">
      {titles.map((item) => {
        return <ControllsItem key={item} title={item} />
      })}
    </div>
  )
}

export default Controlls;